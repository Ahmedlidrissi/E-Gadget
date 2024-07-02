<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order_traking extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_status',
        'order_history',
        'traking_number'
    ];
}
