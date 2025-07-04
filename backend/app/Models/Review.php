<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Review extends Model
{
    use HasFactory;
    
    public function clients() : HasOne {
        return $this->hasOne(Client::class);
    }


    protected $fillable = [
        'Comment',
        'Rating',
        'Clinet_Id'
    ];
}
