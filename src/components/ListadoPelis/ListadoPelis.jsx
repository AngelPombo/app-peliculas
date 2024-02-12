import React from 'react'

const ListadoPelis = () => {
  return (
    <section className='content'>
      <article className="peli-item">
        <h3 className="title">Kill Bill</h3>
        <p className="description">Película de Quentin Tarantino</p>

        <button className="edit-btn">Editar</button>
        <button className="delete-btn">Eliminar</button>

      </article>
    </section>
  )
}

export default ListadoPelis
