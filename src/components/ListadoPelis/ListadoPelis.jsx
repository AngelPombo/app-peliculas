import React, { useEffect, useState } from 'react'
import "./ListadoPelis.css"
import EditarPeli from '../EditarPeli/EditarPeli';

const ListadoPelis = ({listadoState, setListadoState}) => {

  const [editar, setEditar] = useState(0);


  useEffect(() =>{
    conseguirPeliculas();
  }, [])

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  }

  const handleDelete = (id) =>{
    let pelisAlmacenadas = conseguirPeliculas();

    let nuevoArrayPeliculas = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

    setListadoState(nuevoArrayPeliculas)

    localStorage.setItem("pelis", JSON.stringify(nuevoArrayPeliculas));
  }

  return (
    <section className='listado-pelis-section'>
      {listadoState != null ? 
        listadoState.map(peli =>{
          return(
            <article key={peli.id} className="listado-pelis-article">
              <h3 className="peli-title">{peli.titulo}</h3>
              <p className="peli-description">{peli.descripcion}</p>
              <div className='btns-div'>
                <button className="edit-peli-btn" onClick={() => setEditar(peli.id)}>Editar</button>
                <button className="delete-peli-btn" onClick={() => handleDelete(peli.id)}>Eliminar</button>
              </div>
              {editar === peli.id &&(
                  <EditarPeli peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState} />
              )} 
            </article>
        )
      })
      : <h2>Todavía no hay películas para mostrar</h2>
    }
    </section>
  )
}

export default ListadoPelis
