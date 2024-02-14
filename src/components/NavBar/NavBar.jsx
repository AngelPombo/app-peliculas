import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <nav className='nav-bar'>
        <ul className='nav-bar-ul'>
            <li className='nav-bar-li'><a href="/#">Inicio</a></li>
            <li className='nav-bar-li'><a href="/#">Películas</a></li>
            <li className='nav-bar-li'><a href="/#">Blog</a></li>
            <li className='nav-bar-li'><a href="/#">Contacto</a></li>
        </ul>
    </nav>
    
  )
}

export default NavBar
