<?php

namespace App\Http\Controllers;

use App\Servicios;
use Illuminate\Http\Request;

class ServiciosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Servicios::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Servicios::create([
            'id_grua' => $request->id_grua,
            'id_man' => $request->id_man,
            'observaciones' => $request->observaciones,
            'fecha' => $request->fecha,
            'horas' => $request->horas,
            'estado' => $request->estado
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
        return Servicios::whereId_srv($id)->get();
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
        return Servicios::whereId_srv($id)->update([
            'id_grua' => $request->id_grua,
            'id_man' => $request->id_man,
            'observaciones' => $request->observaciones,
            'fecha' => $request->fecha,
            'horas' => $request->horas,
            'estado' => $request->estado
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
        return Servicios::whereId_srv($id)->delete();
    }
}
