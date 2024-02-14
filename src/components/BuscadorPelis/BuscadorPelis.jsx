import React from 'react'
import "./BuscadorPelis.css"

function BuscadorPelis() {
  return (
    <div className="buscador-pelis">
        <h3 className="title">Buscador</h3>
        <form>
            <input type="text"/>
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default BuscadorPelis
