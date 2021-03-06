<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gruas extends Model
{
    protected $table   = 'gruas';
    public $primaryKey = 'id_grua';
    protected $guarded = [];

    public function servicios()
    {
        return $this->hasMany(Servicios::class, 'id_grua', 'id_grua');
    }

    public function manuales()
    {
        return $this->hasMany(Manuales::class, 'id_grua', 'id_grua');
    }
}
