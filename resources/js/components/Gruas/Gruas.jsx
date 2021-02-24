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

    const [agregar, setAgregar] = useState({
        id: 0,
        tipo: 'Reach Stacker',
        fabricante: '',
        modelo: '',
        img: [],
        mensaje: ''
    });

    const [modificar, setModificar] = useState({
        id: 0,
        tipo: '',
        fabricante: '',
        modelo: '',
        img: [],
        mensaje: ''
    });

    const [eliminar, setEliminar] = useState({
        id: 0,
        tipo: '',
        fabricante: '',
        modelo: '',
        img: [],
        mensaje: ''
    });

    const [lista, setLista] = useState([]);

    const selectGrua = async(e) =>
    {
        let id   = e.target.value;
        let name = e.target.name;
        try{
            let respuesta = await Axios.get(`/api/gruas/${id}`);
            if (name === 'modificar'){
                setModificar(previo => ({...previo,
                    id: respuesta.data[0].id_grua,
                    tipo: respuesta.data[0].tipo_grua,
                    fabricante: respuesta.data[0].fab_grua,
                    modelo: respuesta.data[0].mod_grua
                }));
            } else if (name === 'eliminar') {
                setEliminar(previo => ({...previo,
                    id: respuesta.data[0].id_grua,
                    modelo: respuesta.data[0].mod_grua
                }));
            }


        } catch(error){
            console.log('Error: ', error);
        }
    };

    const listaGruas = async() =>
    {
        try{
            let respuesta = await Axios.get('/api/gruas/');
            setLista(respuesta.data);
            console.log('Lista: ', lista);
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
                if (name)
                setAgregar(previo => ({...previo, mensaje: '', img: {name: imagen.name, file: imagen}}));
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
        let name  = e.target.name;
        if(name === 'agregar'){
            setAgregar(previo => ({...previo, [id]: valor}));
        } else if(name === 'modificar'){
            setModificar(previo => ({...previo, [id]: valor}));
        }
    };

    const enviarFormAgregar = (e) =>
    {
        e.preventDefault();
        form.append('tipo_grua', agregar.tipo);
        form.append('fab_grua', agregar.fabricante);
        form.append('mod_grua', agregar.modelo);
        form.append('img', agregar.img.name);
        form.append('file', agregar.img.file);

        Axios
            .post('/api/gruas/', form)
            .then(respuesta => {
                setAgregar(previo => ({...previo, mensaje: 'Grua agregada exitosamente.'}));
            })
            .catch(error => console.log('Error: ', error));
    };

    const enviarFormModificar = (e) =>
    {
        e.preventDefault();
        if(gruas.img === []){
            var datos = {id_grua: modificar.id, tipo_grua: modificar.tipo, fab_grua: modificar.fabricante, mod_grua: modificar.modelo}
        } else {
            form.append('id_grua', modificar.id);
            form.append('tipo_grua', modificar.tipo);
            form.append('fab_grua', modificar.fabricante);
            form.append('mod_grua', modificar.modelo);
            form.append('img', modificar.img.name);
            form.append('file', modificar.img.file);
            var datos = form;
        }
        Axios
            .put(`/api/gruas/${modificar.id}`, datos)
            .then(respuesta => {
                setModificar(previo => ({...previo, mensaje: 'Grua modificada exitosamente.'}))
            })
            .catch(error => console.log('Error: ', error));
    };

    const enviarFormEliminar = async(e) =>
    {
        e.preventDefault();
        try{
            let respuesta = await Axios.delete(`/api/gruas/${eliminar.id}`);
            setEliminar(previo => ({...previo, mensaje: 'Grua eliminada exitosamente.'}))
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const consola = (a) =>
    {
        switch(a){
            case 'agregar':
                console.log('Agregar: ', agregar);
                break;
            case 'modificar':
                console.log('Modificar: ', modificar);
                break;
            case 'eliminar':
                console.log('Eliminar: ', eliminar);
                break;
        }
    };

    useEffect(() => {
        listaGruas();
    }, [agregar.mensaje, modificar.mensaje, eliminar.mensaje]);

    useEffect(() => {consola('agregar');}, [agregar]);
    useEffect(() => {consola('modificar');}, [modificar]);
    useEffect(() => {consola('eliminar');}, [eliminar]);

    return (
        <Menu html={
            <div id="gruas" className="contenido" style={{display: 'flex'}}>
                <div className="row">
                    <AgregarGruas form={enviarFormAgregar} html={
                        <div>
                            <Tipo onChange={cambioCampos} value={agregar.tipo} op='agregar' />
                            <Fabricante onChange={cambioCampos} value={agregar.fabricante} op='agregar' />
                            <Modelo onChange={cambioCampos} value={agregar.modelo} op='agregar'/>
                            <Foto onChange={direccion} onClick={cargarDireccion} value={agregar.direccion} mensaje={agregar.mensaje} op='agregar' />
                        </div>
                    }/>
                    <ModificarGruas form={enviarFormModificar} html={
                        <div>
                            <Seleccion onChange={selectGrua} value={lista} op='modificar' />
                            <Tipo onChange={cambioCampos} value={modificar.tipo}  op='modificar'/>
                            <Fabricante onChange={cambioCampos} value={modificar.fabricante}  op='modificar'/>
                            <Modelo onChange={cambioCampos} value={modificar.modelo}  op='modificar'/>
                            <Foto onChange={direccion} onClick={cargarDireccion} value={modificar.direccion} mensaje={modificar.mensaje} op='modificar'/>
                        </div>
                    }/>
                    <EliminarGruas form={enviarFormEliminar} html={
                        <div>
                            <Seleccion onChange={selectGrua} value={lista} mensaje={eliminar.mensaje} op='eliminar'/>
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
        <div className={`${props.op}-grua-seleccion`}>
            <label htmlFor={`${props.op}gruagrua`}>Selecciona una grúa:</label>
            <select className={`${props.op}gruagrua`} onChange={props.onChange} id={`${props.op}gruagrua`} name={`${props.op}`} >
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
        <div className={`${props.estilo}-grua-tipo`}>
            <label htmlFor={`${props.estilo}gruatipo`}>Tipo de grúa:</label>
            <select value={props.value} onChange={props.onChange} id="tipo" name={`${props.op}`}  >
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
            <input value={props.value} onChange={props.onChange} type="text" id="fabricante" name={`${props.op}`} placeholder="Nombre del fabricante" required />
        </div>
    );
};

const Modelo = (props) =>
{
    return (
        <div className="modificar-grua-modelo">
            <label htmlFor="modificargruamodelo">Modelo: </label>
            <input value={props.value} onChange={props.onChange} type="text" id="modelo" name={`${props.op}`} placeholder="Modelo de la grúa"/>
        </div>
        );
};

const Foto = (props) =>
{
    return (
        <div className="modificar-grua-foto">
            <label htmlFor="modificargruafoto">Imagen de la grúa: </label>
            <input value={props.value} type="text" id="modificardireccion" name={`${props.op}`} placeholder="Imagen..."  disabled/>
            <input onClick={props.onClick} type="button" name="modificargruacarga" id="modificargruacarga" />
            <input onChange={props.onChange} type="file" id="modificarfoto" className="modificargruafoto" name="modificargruafoto" accept=".png, .jpg" />
            <label className="respuesta">{props.mensaje}</label>
        </div>
    );
};

export default Gruas;
