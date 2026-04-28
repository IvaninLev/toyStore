<?php

use App\Models\Toys;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('it prevents to adding toys if stock is empty', function () {
    $toy = Toys::factory()->create(['stock' => 0]);

    $response = $this->post(route('cart.add'), [
        'quantity' => 1,
        'toy_id' => $toy->id,
    ]);

    $response->assertStatus(422);


});
