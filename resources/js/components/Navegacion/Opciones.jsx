import React from 'react';
import {Link} from 'react-router-dom';

function Opciones()
{
    const menu = () =>
    {
        let x = document.getElementById("header-main-menu");
        if (x.className === "header-main-menu") {
            x.className += " responsive";
        } else {
            x.className = "header-main-menu";
        }
    }

    return (
        <header>
            <div className="header-main-contenedor">
                <div className="header-main-icono">
                    <div className="header-main-logo"></div>
                </div>
                <div className="header-main-menu" onClick={menu} id="header-main-menu">
                    <a className="icono-barras" id="menu">
                        <i className="fa fa-bars"></i>
                    </a>
                    <Link to='/'>BÚSQUEDA</Link>
                    <Link to='/catalogo'>CATÁLOGO</Link>
                    <Link to='/gruas'>GRUAS</Link>
                    <Link to='/mantenimiento'>MANTENIMIENTO</Link>
                    <Link to='/manuales'>MANUALES</Link>
                </div>
            </div>
        </header>
    );
}

export default Opciones;
