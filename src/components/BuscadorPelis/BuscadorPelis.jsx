import React, { useState } from 'react'
import "./BuscadorPelis.css"

function BuscadorPelis({listadoState, setListadoState}) {

  const[busqueda, setBusqueda] = useState("");
  const[noEncontrado, setNoEncontrado] = useState(false);

  const handleChange = (e) => {
    
    setBusqueda(e.target.value)
    
    let pelisEncontradas = listadoState.filter(peli =>{
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if(busqueda.length <= 1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrado(true)
    } else{
      setNoEncontrado(false)
    }

    setListadoState(pelisEncontradas);
  }

  return (
    <div className="buscador-pelis">
        <h3 className="title">Buscador</h3>
        {(noEncontrado == true && busqueda.length > 2) && (
          <span>No se ha encontrado ninguna película</span>
        )}
        <form>
            <input type="text" id="buscador" name="busqueda" autoComplete='off' value={busqueda} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default BuscadorPelis
