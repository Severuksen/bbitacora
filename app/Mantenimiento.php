<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mantenimiento extends Model
{
    protected $table    = 'mantenimiento';
    public $primaryKey  = 'id_man';
    protected $guarded  = [];
}
