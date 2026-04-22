<?php

use App\Models\Toys;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;

uses(RefreshDatabase::class);

it('passes toys to the home index component', function () {
    Toys::factory()->count(5)->create(['type' => 'stuffed']);
    Toys::factory()->count(5)->create(['type' => 'wooden']);

    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page
            ->component('home/Index')
            ->has('stuffedToys.data', 5)
            ->has('woodenToys.data', 5)
        );
});
