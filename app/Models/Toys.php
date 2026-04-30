<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Toys extends Model
{
    use HasFactory;

    protected $table = 'toys';
    protected $fillable = [
        'name',
        'description',
        'image',
        'stock',
        'type',
        'price',
    ];

    public function scopeInStock($query)
    {
        return $query->where('stock', '>', 0);
    }
}
