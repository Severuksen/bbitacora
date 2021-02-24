import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Principio from './Principio';
import Catalogo from './Busqueda/Catalogo';
import Busqueda from './Busqueda/BusquedaModelo';
import Gruas from './Gruas/Gruas';
import Mantenimiento from './Mantenimiento/Mantenimiento';
import Manuales from './Manuales/Manuales';



function Index()
{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Principio} />
                <Route path='/catalogo' component={Catalogo} />
                <Route path="/busqueda/:modelo" component={Busqueda} />
                <Route path="/gruas" component={Gruas} />
                <Route path="/mantenimiento" component={Mantenimiento} />
                <Route path="/manuales" component={Manuales} />
            </Switch>
        </Router>
    );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('cuerpo'));
