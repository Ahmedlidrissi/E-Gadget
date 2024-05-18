<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categories extends Model
{
    use HasFactory;
    public function product() : BelongsTo {
        return $this->belongsTo(Products::class);
    }
    protected $fillable = [
        'categorie'
    ];
}
