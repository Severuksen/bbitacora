<?php

namespace App\Http\Controllers;

use App\Manuales;
use Illuminate\Http\Request;

class ManualesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Manuales::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Manuales::create([
            'id_grua' => $request->id_grua,
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'enlace' => $request->enlace
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Manuales::whereId_man($id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return Manuales::whereId_man($id)->update([
            'id_grua' => $request->id_grua,
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'enlace' => $request->enlace
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Manuales::whereId_man($id)->delete();
    }
}
