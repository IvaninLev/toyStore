<?php

namespace App\Http\Controllers\Payments;

use App\Http\Controllers\Controller;
use App\Http\Services\StripeService;
use App\Jobs\SendOrderEmailJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;

class WebhookController extends Controller
{
    public function handle(Request $request, StripeService $stripeService)
    {

        $payload = $request->getContent();
        $sig_header = $request->header('Stripe-Signature');
        $endpoint_secret = config('services.stripe.webhook_secret');

        $parsed = json_decode($payload, true);
        Log::info('Stripe Webhook: received', [
            'ip' => $request->ip(),
            'has_signature' => filled($sig_header),
            'event_id' => data_get($parsed, 'id'),
            'event_type' => data_get($parsed, 'type'),
        ]);

        if (blank($endpoint_secret)) {
            Log::error('Stripe Webhook: STRIPE_WEBHOOK_SECRET is not configured');

            return response()->json(['error' => 'Webhook secret not configured'], 500);
        }

        try {
            $event = Webhook::constructEvent($payload, $sig_header, $endpoint_secret);
        } catch (SignatureVerificationException $e) {
            Log::error('Stripe Webhook: signature verification failed', [
                'message' => $e->getMessage(),
                'event_id' => data_get($parsed, 'id'),
                'event_type' => data_get($parsed, 'type'),
            ]);

            return response()->json(['error' => 'Invalid signature'], 400);
        } catch (\UnexpectedValueException $e) {
            Log::error('Stripe Webhook: invalid payload', [
                'message' => $e->getMessage(),
                'event_id' => data_get($parsed, 'id'),
                'event_type' => data_get($parsed, 'type'),
            ]);

            return response()->json(['error' => 'Invalid payload'], 400);
        }

        if ($event->type !== 'checkout.session.completed') {
            Log::info('Stripe Webhook: ignored event type', [
                'type' => $event->type,
            ]);

            return response()->json(['status' => 'ignored'], 200);
        }

        $session = $event->data->object;

        $mailData = $stripeService->getMailData($session);

        if (empty($mailData['email'])) {
            Log::warning('Stripe Webhook: no email', ['session' => $session->id]);

            return response()->json(['status' => 'skipped'], 200);
        }

        try {
            SendOrderEmailJob::dispatch($mailData);
        } catch (\Throwable $e) {
            Log::error('Mail failed', ['message' => $e->getMessage()]);
        }

        return response()->json(['status' => 'success'], 200);
    }
}
