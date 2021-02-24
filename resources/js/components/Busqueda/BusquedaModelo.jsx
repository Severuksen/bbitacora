import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Opciones from '../Navegacion/Opciones';
import Axios from 'axios';

function Busqueda()
{
    const {modelo}                = useParams();
    const [busqueda, setBusqueda] = useState({gruas: []});

    const buscarGrua = () =>
    {
        Axios
            .get(`/api/busqueda/${modelo}`)
            .then(respuesta => {
                setBusqueda(previo => ({...previo.gruas, gruas: respuesta.data}));
            })
            .catch(error => console.log('Error: ', error));

    };
    useEffect(buscarGrua, []);

    return (
        <main id='catalogo'>
            <Opciones />
             <section>
                <div className="container">
                    <label>RESULTADOS DE LA BÚSQUEDA: '{modelo}'</label>
                    <form>
                        {busqueda.gruas.map(grua => (
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

export default Busqueda;
