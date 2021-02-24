import React from 'react';

function ModificarGruas(props)
{
    return (
        <div className="col-xs-6">
            <div className="modificar-grua-contenedor">
                <div className="modificar-grua-arriba">
                    <div className="modificar-grua-titulo">
                        <label>MODIFICAR GRÚA</label>
                    </div>
                </div>
                <div className="modificar-grua-abajo">
                    <form onSubmit={props.form} id="modificargruaform" encType="multipart/form-data">
                        <div className="container">
                            {props.html}
                            <div className="modificar-grua-boton">
                                <input type="submit" id="modificargrua" name="modificargrua" value="MODIFICAR"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModificarGruas;
