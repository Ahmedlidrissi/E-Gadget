<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categorie extends Model
{
    use HasFactory;
    public function products() : BelongsTo {
        return $this->belongsTo(Product::class);
    }
    protected $fillable = [
        'categorie'
    ];
}
