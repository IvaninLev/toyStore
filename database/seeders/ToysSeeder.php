<?php

namespace Database\Seeders;

use App\Models\Toys;
use Illuminate\Database\Seeder;

class ToysSeeder extends Seeder
{
    public function run(): void
    {
        Toys::factory()->count(500)->create();
    }
}
