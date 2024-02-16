import React, { useState } from 'react'
import "./BuscadorPelis.css"

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
        <h3 className="buscador-title">Buscador</h3>
        <form>
            <input type="text" id="buscador" name="busqueda" autoComplete='off' placeholder='Busca aquí tu peli' value={busqueda} onChange={handleChange} className='buscador-input'/>
        </form>
    </div>
  )
}

export default BuscadorPelis
