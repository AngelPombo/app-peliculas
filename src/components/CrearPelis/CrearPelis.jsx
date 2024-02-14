import React, { useState } from 'react'
import { GuardarEnStorage } from '../../helpers/GuardarEnStorage'
import "./CrearPelis.css"


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

        GuardarEnStorage("pelis", pelicula);
        

    }



  return (
    <div className="crear-pelis-div">
        <h3 className="crear-pelis-title">{tituloComponente}</h3>
        <strong>
            {(titulo && descripcion) && "Has creado la película: " + titulo}
        </strong>

        <form className='crear-pelis-form' onSubmit={handleSubmit}>
            <input type="text" id="titulo" name="titulo" placeholder="Título" />
            <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}

export default CrearPelis
