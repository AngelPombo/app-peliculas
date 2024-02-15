import React from 'react'
import "./EditarPeli.css"

function EditarPeli({peli, conseguirPeliculas, setEditar, setListadoState}) {

    const guardarEdicion = (e,id) =>{
        e.preventDefault();
        
        let target = e.target

        const pelisAlmacenadas = conseguirPeliculas();
        const indice = pelisAlmacenadas.findIndex(peli => peli.id === id);

        let peliActualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }

        pelisAlmacenadas[indice] = peliActualizada;

        localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));

        setListadoState(pelisAlmacenadas);
        setEditar(0);

    }

  return (
    <div className='editar-peli-div'>
      <h3 className='editar-peli-h3'>Editar película : {peli.titulo}</h3>
      <form className='editar-peli-form' onSubmit={e => guardarEdicion(e, peli.id)}>
        <input type='text' name='titulo' className='editar-peli-input' defaultValue={peli.titulo} />
        <textarea name='descripcion' className="editar-peli-textarea" defaultValue={peli.descripcion} />
        <input type='submit' className='editar-peli-btn' value="Actualizar"/>
      </form>
    </div>
  )
}

export default EditarPeli
