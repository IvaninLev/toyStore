<?php

namespace Database\Factories;

use App\Models\Toys;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ToysFactory extends Factory
{
    protected $model = Toys::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->text(),
            'type' => $this->faker->randomElement(['stuffed', 'wooden']),
            'image' => 'https://loremflickr.com/400/400/toy,plush?lock=' . $this->faker->unique()->numberBetween(1, 1000),
            'price' => $this->faker->randomNumber(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
