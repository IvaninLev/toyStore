<?php

namespace App\Http\Controllers;

use App\Models\Toys;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {

    }

    public function add(Request $request)
    {
        $request->validate([
            'toy_id' => 'required|exists:toys,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $toy = Toys::findOrFail($request->toy_id);

    if($toy->stock < $request->quantity) {
        return response()->json(['message' => 'Toy is not enough stock.'], 422);
    }
    return response()->json(['message' => 'Item added to cart successfully.'], 200);
    }
}
