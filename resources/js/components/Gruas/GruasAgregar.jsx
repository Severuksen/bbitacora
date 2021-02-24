import React from 'react';

const AgregarGruas = (props) =>
{
    return (
        <div className="col-xs-6">
            <div className="agregar-grua-contenedor">
                <div className="agregar-grua-arriba">
                    <div className="agregar-grua-titulo">
                        <label>AGREGAR GRÚA</label>
                    </div>
                </div>
                <div className="agregar-grua-abajo">
                    <form encType="multipart/form-data" onSubmit={props.form}>
                        <div className="container">
                            {props.html}
                            <div className="agregar-grua-boton">
                                <input type="submit" id="agregargrua" name="agregargrua" value="AGREGAR"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgregarGruas;
