import React, { useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

function Prueba()
{
    return (
        <Example Nada={<h1>Prueba</h1>} />
    );
}


function Example(props) {
    // Mantener las últimas props en una ref.
    const latestProps = useRef(props);
    useEffect(() => {
      latestProps.current = props;
    });

    useEffect(() => {
      function tick() {
        // Leer la últimas props en cualquier momento
        console.log(latestProps.current);
      }

      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }, []); // Este fecto nunca se vuelve a ejectuar
  }

export default Prueba;

ReactDOM.render(<Prueba />, document.getElementById('cuerpo'));
