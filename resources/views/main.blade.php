<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=760, minimum-scale=0.3, maximum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="{{asset('js/app.js')}}" defer></script>
        {{-- <script type="application/ecmascript" src="{{asset('js/jquery-3.5.1.min.js')}}"></script>
        <script type="application/ecmascript" src="{{asset('js/func.js')}}"></script> --}}
        <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div id="cuerpo"></div>
    </body>
</html>
