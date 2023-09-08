import React from 'react';
import "../hoja de estilo/testimonios.css";


function Testimonio(props) {
  return(
    <div ClassName='contenedor-testimonio'>
      <div className='quepasa'>
         <img  className='ing-testimonio' alt='emma' src={require(`../img/testimonio-${props.imagen}.png`)}/>
         <div className='conteiner-text'>
           <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
           <p className='cargo-testimoniop'>{props.cargo} en <strong>{props.empresa}</strong></p>
           <p className='testimoni-texto'>{props.Testimonio}</p>
        </div>
      </div>
    </div>
  );
    
}
export default Testimonio;