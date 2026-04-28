<?php

use App\Models\Toys;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('it prevents adding more items to cart than available in stock', function () {

    $toy = Toys::factory()->create(['stock' => 5]);

    $response = $this->post(route('cart.add'), [
        'quantity' => 6,
        'toy_id' => $toy->id,
    ]);

    $response->assertStatus(422);
    $response->assertJsonFragment(['message' => 'Toy is not enough stock.']);
});
