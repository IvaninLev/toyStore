<?php

use App\Mail\OrderProcessedMail;
use Stripe\Event;
use Stripe\Webhook;

it('completes the order after successful payment', function () {
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

    $response = $this->postJson(route('webhook.stripe'), [
        'id' => 'ev_test_123',
        'type' => 'checkout.session.completed',
    ], [
        'Stripe-Signature' => 'fake_signature',
    ]);

    $response->assertStatus(200);
    dump($response->json());
    Illuminate\Support\Facades\Mail::assertSent(OrderProcessedMail::class, function ($mail) {
        return $mail->hasTo('test@example.com') &&
            $mail->mailData['amount_total'] === 3000;
    });
});
