import './App.css'
import BuscadorPelis from './components/BuscadorPelis/BuscadorPelis'
import CrearPelis from './components/CrearPelis/CrearPelis'
import Header from './components/Header/Header'
import ListadoPelis from './components/ListadoPelis/ListadoPelis'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
      <div className="layout">
        <Header />
        <NavBar />
        <BuscadorPelis />
        <ListadoPelis />
        <CrearPelis />
        <footer className='footer'>
          Desarollado por Ángel Pombo 
        </footer>
      </div>
  )
}

export default App
