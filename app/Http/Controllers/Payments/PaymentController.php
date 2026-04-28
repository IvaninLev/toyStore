<?php

namespace App\Http\Controllers\Payments;

use App\Models\Toys;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController
{
    public function checkOut(Request $request)
    {


        $validated = $request->validate([
            'cart' => ['required', 'array', 'min:1'],
            'cart.*.name' => ['required', 'string', 'max:255'],
            'cart.*.price' => ['required', 'numeric', 'min:0'],
            'cart.*.quantity' => ['required', 'integer', 'min:1'],
        ]);

        Stripe::setApiKey(config('services.stripe.secret'));
        $cartItems = $validated['cart'];
        $lineItems = [];

        foreach ($cartItems as $item) {
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $item['name'],
                    ],
                    'unit_amount' => $item['price'] * 100,
                ],
                'quantity' => $item['quantity'],
            ];
        }

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => $lineItems,
            'mode' => 'payment',
            'billing_address_collection' => 'required',
            'shipping_address_collection' => [
                'allowed_countries' => ['US', 'CZ', 'UA'],
            ],
            'success_url' => route('success'),
            'cancel_url' => route('cancel'),
        ]);

        return response()->json(['url' => $session->url]);
    }
}
