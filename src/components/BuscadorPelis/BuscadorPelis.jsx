import React, { useState } from 'react';
import "./BuscadorPelis.css";
import logo from "/buscadoricon.svg";

function BuscadorPelis({listadoState, setListadoState}) {

  const[busqueda, setBusqueda] = useState("");
 

  const handleChange = (e) => {
    
    setBusqueda(e.target.value)
    
    let pelisEncontradas = listadoState.filter(peli =>{
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if(busqueda.length <= 1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"))
      
    } else{
      
    }

    setListadoState(pelisEncontradas);
  }

  return (
    <div className="buscador-pelis">
      <img className="buscador-logo" src={logo} alt='icono buscador'/>
      <form>
          <input className='buscador-input' type="text" id="buscador" name="busqueda" autoComplete='off' placeholder='Busca aquí tu peli' value={busqueda} onChange={handleChange} />
      </form>
    </div>
  )
}

export default BuscadorPelis
