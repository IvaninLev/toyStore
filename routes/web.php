<?php

use App\Http\Controllers\ToysController;
use App\Http\Resources\ToysResource;
use App\Models\Toys;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ToysController::class, 'index'])->name('home');

require __DIR__.'/settings.php';
