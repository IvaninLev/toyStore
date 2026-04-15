<?php

namespace App\Http\Controllers;

use App\Enums\PaginationEnum;
use App\Http\Requests\ToysRequest;
use App\Http\Resources\ToysResource;
use App\Models\Toys;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ToysController extends Controller
{
    public function index()
    {
        $stuffed = ToysResource::collection(
            Toys::where('type', 'stuffed')->latest()->paginate(PaginationEnum::PAGE_SIZE->value)
        );

        $wooden = ToysResource::collection(
            Toys::where('type', 'wooden')->latest()->paginate(PaginationEnum::PAGE_SIZE->value)
        );

        return Inertia::render('home/Index', [
            'stuffedToys' => $stuffed,
            'woodenToys' => $wooden,
        ]);
    }

    public function store(ToysRequest $request)
    {
        return Toys::create($request->validated());
    }

    public function show(Toys $toys)
    {
        return $toys;
    }

    public function update(ToysRequest $request, Toys $toys)
    {
        $toys->update($request->validated());

        return $toys;
    }

    public function destroy(Toys $toys)
    {
        $toys->delete();

        return response()->json();
    }

    public function catalogIndex(Request $request)
    {
        $query = Toys::query();

        if ($request->has('category')) {
            $query->where('type', $request->category);
        }

        $toys = $query->latest()->paginate(PaginationEnum::PAGE_SIZE->value);

        return Inertia::render('catalog/Index', [
            'products' => $toys,
            'filters' => $request->only(['category']),
        ]);
    }
}
