<?php

use App\Http\Controllers\Payments\PaymentController;
use App\Http\Controllers\ToysController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ToysController::class, 'index'])->name('home');

Route::get('/payment/success', function () {
    return Inertia::render('payment/Success');
})->name('success');

Route::get('/payment/cancel', function () {
    return Inertia::render('payment/Cancel');
})->name('cancel');

Route::get('/catalog', function () {
    return Inertia::render('catalog/Catalog');
})->name('catalog');

Route::post('/checkout', [PaymentController::class, 'checkout'])->name('checkout');

require __DIR__ . '/settings.php';
