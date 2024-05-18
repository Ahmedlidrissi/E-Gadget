<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;

class Cart extends Model
{
    use HasFactory;

    public function discount() : HasOne {
        return $this->hasOne(Discounts::class);
    }
    public function products() : HasOne {
        return $this->hasOne(Products::class);
    }
    protected $fillable = [
        'product_id',
        'quantity',
        'totale_price',
        'discount_id'
    ];
}
