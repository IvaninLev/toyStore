<?php

use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('prevents payment with an empty cart', function () {

    $response = $this->postJson(route('checkout'), [
        'cart' => [],
    ]);


    $response->assertStatus(422)
        ->assertJsonValidationErrors(['cart']);

});
