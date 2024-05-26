<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    
    public function Categorie() : HasOne {
        return $this->hasOne(Categorie::class);
    }

    protected $fillable = [
        'productName',
        'description',
        'price',
        'image',
        'stock',
        'categorie'
    ];
}
