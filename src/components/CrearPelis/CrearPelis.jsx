import React, { useState } from 'react'

function CrearPelis() {

    const tituloComponente = "Añadir película"

    const [peli, setPeli] = useState({
        titulo: "",
        descripcion: ""
    })

    const {titulo, descripcion} = peli

    const handleSubmit = e =>{
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        
        let pelicula = {
            id: new Date().getTime(),
            titulo: titulo,
            descripcion: descripcion
        }
        
        setPeli(pelicula);

    }


  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>
            {(titulo && descripcion) && "Has creado la película: " + titulo}
        </strong>

        <form onSubmit={handleSubmit}>
            <input type="text" id="titulo" name="titulo" placeholder="Título" />
            <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}

export default CrearPelis
