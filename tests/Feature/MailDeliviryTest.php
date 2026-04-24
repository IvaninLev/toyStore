<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Mail\OrderProcessedMail;
use Stripe\Event;
use Stripe\Webhook;

uses(RefreshDatabase::class);

test('stripe webhook triggers order processed email', function () {
    Mail::fake();

    $sessionData = [
        'id' => 'cs_test_123',
        'amount_total' => 3000,
        'currency' => 'usd',
        'customer_details' => [
            'name' => 'John Doe',
            'email' => 'test@example.com',
            'address' => ['line1' => 'Street 1', 'city' => 'New York'],
        ],
    ];

    $mockEvent = new Event;
    $mockEvent->type = 'checkout.session.completed';
    $mockEvent->data = (object) ['object' => (object) $sessionData];

    $this->mock('alias:'.Webhook::class, function ($mock) use ($mockEvent) {
        $mock->shouldReceive('constructEvent')->andReturn($mockEvent);
    });

    $this->postJson(route('webhook.stripe'), [
        'id' => 'ev_test_123',
        'type' => 'checkout.session.completed',
    ], [
        'Stripe-Signature' => 'fake_signature',
    ])->assertOk();

    Mail::assertSent(OrderProcessedMail::class, function (OrderProcessedMail $mail) {
        return $mail->hasTo('test@example.com')
            && ($mail->mailData['amount_total'] ?? null) === 3000;
    });
});
