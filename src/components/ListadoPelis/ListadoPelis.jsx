import React from 'react'
import "./ListadoPelis.css"

const ListadoPelis = () => {
  return (
    <section className='listado-pelis-section'>
      <article className="listado-pelis-article">
        <h3 className="peli-title">Kill Bill</h3>
        <p className="peli-description">Película de Quentin Tarantino</p>
        <div className='btns-div'>
          <button className="peli-btn">Editar</button>
          <button className="peli-btn">Eliminar</button>
        </div>
      </article>
    </section>
  )
}

export default ListadoPelis
