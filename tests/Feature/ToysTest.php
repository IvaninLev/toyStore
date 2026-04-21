<?php

namespace Tests\Feature;

use App\Models\Toys;
use Tests\TestCase;

class ToysTest extends TestCase
{
    public function it_filters_toys_by_min_price()
    {
        Toys::factory()->create(['price' => 50, 'type' => 'wooden']);
        Toys::factory()->create(['price' => 200, 'type' => 'stuffed']);

        $response = $this->get('/catalog?min=100');

        $response->assertStatus(200);

        $response->assertInertia(fn ($page) => $page
            ->has('products.data', 1)
            ->where('products.data.0.price', 200)
        );
    }
}
