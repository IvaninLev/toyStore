<?php

namespace App\Http\Controllers\Payments;

use App\Http\Controllers\Controller;
use App\Mail\OrderProcessedMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;

class WebhookController extends Controller
{
    private function buildMailData(object $session): array
    {
        $shippingDetails = $this->resolveShippingDetails($session);
        $address = data_get($shippingDetails, 'address')
            ?? data_get($session, 'customer_details.address');

        return [
            'session_id' => $session->id,
            'email' => $this->resolveEmail($session),
            'amount_total' => $session->amount_total ?? 0,
            'currency' => $session->currency ?? 'usd',
            'customer_name' => data_get($shippingDetails, 'name') ?? data_get($session, 'customer_details.name'),
            'address_line1' => data_get($address, 'line1', 'no address'),
            'address_line2' => data_get($address, 'line2'),
            'postal_code' => data_get($address, 'postal_code'),
            'city' => data_get($address, 'city'),
            'state' => data_get($address, 'state'),
            'country' => data_get($address, 'country'),

        ];
    }

    private function resolveEmail(object $session): ?string
    {
        return data_get($session, 'customer_details.email')
            ?? data_get($session, 'customer_email')
            ?? null;

    }

    private function resolveShippingDetails(object $session): ?object
    {
        return data_get($session, 'shipping_details')
            ?? data_get($session, 'collect.information.shipping_details')
            ?? null;
    }

    public function handle(Request $request)
    {
        $payload = $request->getContent();
        $sig_header = $request->header('Stripe-Signature');
        $endpoint_secret = config('services.stripe.webhook_secret');

        try {
            $event = Webhook::constructEvent($payload, $sig_header, $endpoint_secret);
        } catch (SignatureVerificationException $e) {
            Log::error('Stripe Webhook: подпись не совпала!');

            return response()->json(['error' => 'Invalid signature'], 400);
        } catch (\UnexpectedValueException $e) {
            Log::error('Stripe Webhook: ошибка в данных запроса!');

            return response()->json(['error' => 'Invalid payload'], 400);
        }

        if ($event->type !== 'checkout.session.completed') {
            return response()->json(['status' => 'ignored'], 200);
        }

        $session = $event->data->object;
        $mailData = $this->buildMailData($session);

        if (! $mailData['email']) {
            Log::warning('Stripe Webhook: no email for session', ['session' => $session->id]);

            return response()->json(['status' => 'skipped'], 200);
        }

        Mail::to($mailData['email'])->send(new OrderProcessedMail($mailData));

        return response()->json(['status' => 'success'], 200);
    }
}
