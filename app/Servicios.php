<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicios extends Model
{
    protected $table    = 'servicios';
    public $primaryKey  = 'id_srv';
    protected $guarded  = [];

    public function gruas()
    {
        return $this->belongsTo(Gruas::class, 'id_grua', 'id_grua');
    }
    public function mantenimiento()
    {
        return $this->belongsTo(Mantenimiento::class, 'id_man', 'id_man');
    }
}

