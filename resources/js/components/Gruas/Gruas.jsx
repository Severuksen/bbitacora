import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Opciones from '../Navegacion/Opciones';
import Menu from '../Menu';
import AgregarGruas from './GruasAgregar';
import ModificarGruas from './GruasModificar';
import EliminarGruas from './GruasEliminar';

const Gruas = () =>
{
    const form = new FormData();

    const [gruas, setGruas] = useState({
        id: 0,
        tipo: 'Reach Stacker',
        fabricante: '',
        modelo: '',
        img: [],
        mensajeAgregar: '',
        mensajeModificar: '',
        mensajeEliminar: '',
        listaGruas: []
    });

    const selectGrua = (e) =>
    {
        let id = e.target.value;
        Axios.get(`/api/gruas/${id}`)
            .then(respuesta => {
                setGruas(previo => ({...previo,
                    id: respuesta.data[0].id_grua,
                    tipo: respuesta.data[0].tipo_grua,
                    fabricante: respuesta.data[0].fab_grua,
                    modelo: respuesta.data[0].mod_grua
                }));
            })
            .catch(error => console.log('Error: ', error));
    };

    const listaGruas = async() =>
    {
        try{
            let respuesta = await Axios.get('/api/gruas/');
            setGruas(previo => ({...previo, listaGruas: respuesta.data}));
        } catch(error){
            console.log('Error: ', error);
        }
    };

    const cargarDireccion = (e) =>
    {
        e.target.nextSibling.click();
    };

    const direccion = (e) =>
    {
        var imagen = e.target.files[0];
        switch (imagen.type) {
            case "image/png":
            case "image/jpg":
            case "image/jpeg":
                let direccion   = e.target.parentNode.firstChild.nextSibling;
                let nombre      = e.target.value.substr(12);
                direccion.value = nombre;

                setGruas(previo => ({
                    ...previo,
                    mensaje: '',
                    img: {
                        name: imagen.name,
                        file: imagen
                    }
                }));
                break;
            default:
                return setGruas(previo => ({
                    ...previo,
                    mensaje: 'El formato de la imagen seleccionada no es correcta.'
                }));
                break;
        }
    };

    const cambioCampos = (e) =>
    {
        let valor = e.target.value;
        let id    = e.target.id;
        setGruas(previo => ({...previo, [id]: valor}));
    };

    const enviarFormAgregar = (e) =>
    {
        e.preventDefault();
        form.append('tipo_grua', gruas.tipo);
        form.append('fab_grua', gruas.fabricante);
        form.append('mod_grua', gruas.modelo);
        form.append('img', gruas.img.name);
        form.append('file', gruas.img.file);

        Axios
            .post('/api/gruas/', form)
            .then(respuesta => {
                setGruas(previo => ({...previo, mensajeAgregar: 'Grua agregada exitosamente.', mensajeModificar: '', mensajeEliminar: ''}));
            })
            .catch(error => console.log('Error: ', error));
    };

    const enviarFormModificar = (e) =>
    {
        e.preventDefault();
        if(gruas.img === []){
            var datos = {id_grua: gruas.id, tipo_grua: gruas.tipo, fab_grua: gruas.fabricante, mod_grua: gruas.modelo}
        } else {
            var datos = {id_grua: gruas.id, tipo_grua: gruas.tipo, fab_grua: gruas.fabricante, mod_grua: gruas.modelo, img: gruas.img}
        }
        Axios
            .put(`/api/gruas/${gruas.id}`, datos)
            .then(respuesta => {
                setGruas(previo => ({...previo, mensajeAgregar: '', mensajeModificar: 'Grua modificada exitosamente.', mensajeEliminar: ''}))
            })
            .catch(error => console.log('Error: ', error));
    };

    const enviarFormEliminar = async(e) =>
    {
        e.preventDefault();
        try{
            let respuesta = await Axios.delete(`/api/gruas/${gruas.id}`);
            setGruas(previo => ({...previo, mensajeAgregar: '', mensajeModificar: '', mensajeEliminar: 'Grua eliminada exitosamente.'}))
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const consola = () =>
    {
        console.log('Gruas: ', gruas);
    };

    useEffect(() => {
        listaGruas();
    }, [gruas.mensajeAgregar, gruas.mensajeModificar, gruas.mensajeEliminar]);

    useEffect(() => {consola();}, [gruas]);

    return (
        <Menu html={
            <div id="gruas" className="contenido" style={{display: 'flex'}}>
                <div className="row">
                    <AgregarGruas form={enviarFormAgregar} html={
                        <div>
                            <Tipo onChange={cambioCampos} value={gruas.tipo} />
                            <Fabricante onChange={cambioCampos} value={gruas.fabricante} />
                            <Modelo onChange={cambioCampos} value={gruas.modelo} />
                            <Foto onChange={direccion} onClick={cargarDireccion} value={gruas.direccion} mensaje={gruas.mensajeAgregar} />
                        </div>
                    }/>
                    <ModificarGruas form={enviarFormModificar} html={
                        <div>
                            <Seleccion onChange={selectGrua} value={gruas.listaGruas}  />
                            <Tipo onChange={cambioCampos} value={gruas.tipo}  />
                            <Fabricante onChange={cambioCampos} value={gruas.fabricante}  />
                            <Modelo onChange={cambioCampos} value={gruas.modelo}  />
                            <Foto onChange={direccion} onClick={cargarDireccion} value={gruas.direccion} mensaje={gruas.mensajeModificar}  />
                        </div>
                    }/>
                    <EliminarGruas form={enviarFormEliminar} html={
                        <div>
                            <Seleccion onChange={selectGrua} value={gruas.listaGruas} mensaje={gruas.mensajeEliminar}/>
                        </div>
                    }/>
                </div>
            </div>
        }/>
    );
};

const Seleccion = (props) =>
{
    return (
        <div className="modificar-grua-seleccion">
            <label htmlFor="modificargruagrua">Selecciona una grúa:</label>
            <select onChange={props.onChange} id="modificargruagrua" name="modificargruagrua" >
                {props.value.map(gruas => (
                    <option key={gruas.id_grua} value={gruas.id_grua}>{gruas.mod_grua}</option>
                ))}
            </select>
            <label className="respuesta">{props.mensaje}</label>
        </div>
    );
};

const Tipo = (props) =>
{
    return (
        <div className="modificar-grua-tipo">
            <label htmlFor="modificargruatipo">Tipo de grúa:</label>
            <select value={props.value} onChange={props.onChange} id="tipo" name="modificargruatipo"  >
                <option value="Reach Stacker">Reach Stacker</option>
                <option value="Forklift">Forklift</option>
            </select>
        </div>
    );
};

const Fabricante = (props) =>
{
    return (
        <div className="modificar-grua-fabricante">
            <label htmlFor="modificarfabricante">Fabricante: </label>
            <input value={props.value} onChange={props.onChange} type="text" id="fabricante" name="modificargruafabricante" placeholder="Nombre del fabricante" required />
        </div>
    );
};

const Modelo = (props) =>
{
    return (
        <div className="modificar-grua-modelo">
            <label htmlFor="modificargruamodelo">Modelo: </label>
            <input value={props.value} onChange={props.onChange} type="text" id="modelo" name="modificargruamodelo" placeholder="Modelo de la grúa"/>
        </div>
        );
};

const Foto = (props) =>
{
    return (
        <div className="modificar-grua-foto">
            <label htmlFor="modificargruafoto">Imagen de la grúa: </label>
            <input value={props.value} type="text" id="modificardireccion" name="modificardireccion" placeholder="Imagen..."  disabled/>
            <input onClick={props.onClick} type="button" name="modificargruacarga" id="modificargruacarga" />
            <input onChange={props.onChange} type="file" id="modificarfoto" className="modificargruafoto" name="modificargruafoto" accept=".png, .jpg" />
            <label className="respuesta">{props.mensaje}</label>
        </div>
    );
};

export default Gruas;
