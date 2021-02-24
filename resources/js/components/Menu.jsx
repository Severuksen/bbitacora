import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Opciones from './Navegacion/Opciones';

function Menu(props)
{
    return (
        <main>
            <Opciones />
            <section>
                <div className="container">
                    <label>MENÚ DE OPCIONES</label>
                </div>
            </section>
            <section className="container">
                <div className="grua-tab">
                    <div className="tab">
                        <Link to='/gruas'>
                            <button className='enlaces' id="gruas">GRÚAS</button>
                        </Link>
                        <Link to='/mantenimiento'>
                            <button className='enlaces' id="mantenimiento">MANTENIMIENTO</button>
                        </Link>
                        <Link to='/datos'>
                            <button className='enlaces' id="datos">DATOS TECNICOS</button>
                        </Link>
                        <Link to='/manuales'>
                            <button className='enlaces' id="manuales">MANUALES</button>
                        </Link>
                    </div>
                    {props.html}
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="centrado">
                        <div className="block-section">
                            <Link to='/'>
                                <input type="submit" className="boton-catalogo" value="REGRESAR"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Menu;



