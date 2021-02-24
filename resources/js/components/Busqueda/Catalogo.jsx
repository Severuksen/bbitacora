import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Opciones from '../Navegacion/Opciones';
import Axios from 'axios';

function Catalogo()
{
    const [catalogo, setCatalogo] = useState({
        gruas: []
    });

    const obtenerGruas = () =>
    {
        Axios
            .get('/api/busqueda/')
            .then(respuesta => setCatalogo({gruas: [...respuesta.data]}))
            .catch(error => console.log('Error: ', error));
    };

    useEffect(obtenerGruas, []);

    return (
        <main id='catalogo'>
            <Opciones />
             <section>
                <div className="container">
                    <label>CATÁLOGO DE GRÚAS</label>
                    <form>
                        {catalogo.gruas.map(grua => (
                            <div className="section-gruas" key={grua.id_grua}>
                                <div className="gruas-gris">
                                    <div className="gruas-imagen" style={{backgroundImage: `url('${grua.img}')`}}></div>
                                </div>
                                <div className="gruas-blanco">
                                    <div className="gruas-descripcion">
                                        <label><b>{grua.tipo_grua} {grua.mod_grua}</b></label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>
             </section>
             <footer>
                <div className="container">
                    <div className="centrado">
                        <div className="block-section">
                            <Link to="/">
                                <input type="submit" className="boton-catalogo" value="REGRESAR" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Catalogo;
