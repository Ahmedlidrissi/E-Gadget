<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use PhpParser\Node\Expr\FuncCall;

class Discounts extends Model
{
    use HasFactory;
    public function Cart() : BelongsTo {
        return $this->belongsTo(Cart::class);
    }

    protected $fillable = [
        'discount',
        'discountCode',
        'ValidationDate'
    ];
}
