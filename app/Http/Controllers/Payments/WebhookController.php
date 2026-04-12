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
        $address = $shippingDetails?->address
            ?? $session->customer_details?->address;

        return [
            'session_id' => $session->id,
            'email' => $this->resolveEmail($session),
            'amount_total' => $session->amount_total ?? 0,
            'currency' => $session->currency ?? 'usd',
            'customer_name' => $shippingDetails->name ?? $session->customer_details?->name,
            'address_line1' => $address?->line1 ?? 'no adress',
            'address_line2' => $address?->line2,
            'postal_code' => $address?->postal_code,
            'city' => $address?->city,
            'state' => $address?->state,
            'country' => $address?->country,

        ];
    }

    private function resolveEmail(object $session): ?string
    {
        return $session->customer_details->email
            ?? $session->customer_email
            ?? null;

    }

    private function resolveShippingDetails(object $session): ?object
    {
        return $session->shipping_details
            ?? $session->collected_information->shipping_details
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

        if (!$mailData['email']) {
            Log::warning('Stripe Webhook: no email for session', ['session' => $session->id]);
            return response()->json(['status' => 'skipped'], 200);
        }

        Mail::to($mailData['email'])->send(new OrderProcessedMail($mailData));

        return response()->json(['status' => 'success'], 200);
    }

}
