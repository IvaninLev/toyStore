<?php

use App\Enums\PaginationEnum;
use App\Http\Controllers\Payments\WebhookController;
use App\Models\Toys;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/toys/stuffed', function () {
    return Toys::where('type', 'stuffed')->latest()->paginate(PaginationEnum::PAGE_SIZE->value);
});

Route::get('/toys/wooden', function () {
    return Toys::where('type', 'wooden')->latest()->paginate(PaginationEnum::PAGE_SIZE->value);
});

Route::get('/catalog', function () {
    return Inertia::render('catalog/Index', [
        'products' => Toys::latest()->paginate(PaginationEnum::PAGE_SIZE->value),
    ]);
});
Route::post('/webhook/stripe', [WebhookController::class, 'handle']);
