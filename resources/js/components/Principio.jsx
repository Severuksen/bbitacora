import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

function Principio()
{
    const [modelo, setModelo] = useState('');
    const historial           = useHistory();

    const cambioInput = (e) =>
    {
        let valor = e.target.value;
        setModelo(valor);
    };

    const enviarModelo = (e) =>
    {
        e.preventDefault();
        historial.push(`/busqueda/${modelo}`);
    };

    return (
        <main id='index'>
            <header>
                <div className="header-contenedor">
                    <div className="gonavi-logo">
                        <img src="img/gonavi.png" width="300px" height="69px" alt="Logo de Gonavi" />
                    </div>
                    <div className="bitacora-logo">
                        <img src="img/bitacora.png" width="250px" height="69px" alt="Logo de Bitácora" />
                    </div>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="centrado">
                        <div className="block-section">
                            <label htmlFor="busqueda">Buscar grúas por:</label>
                            <form onSubmit={enviarModelo}>
                                <input onChange={cambioInput} type="search" className="busqueda" name="busqueda" id="busqueda" placeholder="MODELO..." value={modelo}/>
                                <input type="submit" className="lupa" value=""/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="centrado">
                    <Link to='/catalogo'>
                        <input type="submit" className="boton-catalogo" value="CATÁLOGO DE GRÚAS" />
                    </Link>
                    <Link to='/gruas'>
                        <input type="submit" className="boton-catalogo-verde" value="MENÚ" />
                    </Link>
                </div>
            </footer>
        </main>
    );
}

export default Principio;
