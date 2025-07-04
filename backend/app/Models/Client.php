<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Client extends Model
{
    use HasFactory;

    public function reviews() : BelongsTo {
        return $this->belongsTo(Review::class);
    }

    protected $fillable = [
        'FirstName',
        'LastName',
        'PhoneNumber'
    ];
}
