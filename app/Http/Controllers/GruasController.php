<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Gruas;
use Illuminate\Support\Facades\Storage;

class GruasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Gruas::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'tipo_grua' => 'required|max:13',
            'fab_grua' => 'required|max:30',
            'mod_grua' => 'required|max:255',
            'img' => 'required'
        ]);

        $id = Gruas::create(['tipo_grua' => e($request->tipo_grua), 'fab_grua' => e($request->fab_grua), 'mod_grua' => e($request->mod_grua)
        ])->id_grua;

        $foto      = $request->file('file');
        $extension = $foto->extension();
        $modelo    = str_replace(" ", "", $request->mod_grua);

        switch($extension){
            case 'jpg':
                $img = imagecreatefromjpeg($foto);
                break;
            case 'png':
                $img = imagecreatefrompng($foto);
                break;
        }

        $nombre = $id."-".$modelo.".jpg";
        imagejpeg($img, storage_path().'\\app\\upload\\'.$nombre, 70);
        imagedestroy($img);

        return Gruas::whereId_grua($id)->update(['img' => "/upload/".$nombre])? 'Cargado exitosamente': 'Error al ejecutar la consulta SQL.';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Gruas::where('id_grua', 'LIKE', "$id%")->orWhere('mod_grua', 'LIKE', "$id%")->get();
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
        if ($request->img == []){
            $datos = [
                'tipo_grua' => $request->tipo_grua,
                'fab_grua' => $request->fab_grua,
                'mod_grua' => $request->mod_grua
            ];
        } else {
            $datos = [
                'tipo_grua' => $request->tipo_grua,
                'fab_grua' => $request->fab_grua,
                'mod_grua' => $request->mod_grua,
                'img' => $request->img
            ];
        }
        return Gruas::whereId_grua($id)->update($datos);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Gruas::whereId_grua($id)->delete();
    }
}
