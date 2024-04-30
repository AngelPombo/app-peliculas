import React from 'react'
import "./Header.css"
import Image from "../../images/pelicula-img.png"

function Header() {
  return (
    <header className="header">
      <h1 className='header-title'>Mis películas pendientes</h1>
      <img src={Image} alt='Logo' className='header-image'/>
    </header>
  )
}

export default Header
