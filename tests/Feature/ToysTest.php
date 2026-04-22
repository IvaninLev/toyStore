<?php

use App\Models\Toys;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('filters toys by min price', function () {
    Toys::factory()->create(['price' => 50, 'type' => 'wooden']);
    Toys::factory()->create(['price' => 200, 'type' => 'stuffed']);

    $response = $this->get('/catalog?min=100');

    $response->assertStatus(200);

    $response->assertInertia(fn ($page) => $page
        ->has('products.data', 1)
        ->where('products.data.0.price', 200)
    );
});
