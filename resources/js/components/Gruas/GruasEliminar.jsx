import React from 'react';

function EliminarGruas(props)
{
    return (
        <div className="col-xs-6">
            <div className="eliminar-grua-contenedor">
                <div className="eliminar-grua-arriba">
                    <div className="eliminar-grua-titulo">
                        <label>ELIMINAR GRÚA</label>
                    </div>
                </div>
                <div className="eliminar-grua-abajo">
                    <form onSubmit={props.form}>
                        <div className="container">
                            {props.html}
                            <div className="eliminar-grua-boton">
                                <input type="submit" id="eliminargrua" name="eliminargrua" value="ELIMINAR" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EliminarGruas;
