<?php

namespace App\Http\Services;

use PhpParser\Node\Expr\Cast\Object_;

class StripeService
{
    public function getMailData(Object $session)
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

    public function resolveEmail(object $session): ?string
    {
        return data_get($session, 'customer_details.email')
            ?? data_get($session, 'customer_email')
            ?? data_get($session, 'email')
            ?? null;

    }

    public function resolveShippingDetails(object $session): object|array|null
    {
        return data_get($session, 'shipping_details')
            ?? data_get($session, 'collected_information.shipping_details')
            ?? null;
    }


}
