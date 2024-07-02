<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase_Gide extends Model
{
    use HasFactory;

    protected $fillable=[
        'tips_for_using_theProduct',
        'productComparison',
        'size',
        'color'
    ];
}
