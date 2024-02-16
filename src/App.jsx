import { useState } from 'react'
import './App.css'
import BuscadorPelis from './components/BuscadorPelis/BuscadorPelis'
import CrearPelis from './components/CrearPelis/CrearPelis'
import Header from './components/Header/Header'
import ListadoPelis from './components/ListadoPelis/ListadoPelis'

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
      <div className="layout">
        <Header />
        <BuscadorPelis listadoState={listadoState} setListadoState={setListadoState} />
        <ListadoPelis listadoState={listadoState} setListadoState={setListadoState} />
        <CrearPelis setListadoState={setListadoState} />
        <footer className='footer'>
          © Desarollado por Ángel Pombo 
        </footer>
      </div>
  )
}

export default App
