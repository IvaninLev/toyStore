<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('prevents creating a checkout with a negative item price', function () {

    $response = $this->postJson(route('checkout'), [
        'cart' => [
            [

                'name' => 'good toy',
                'quantity' => 1,
                'price' => -100,
            ],
        ],
    ]);

    $response->assertStatus(422)
        ->assertJsonValidationErrors(['cart.0.price']);
});
