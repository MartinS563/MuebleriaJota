import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar.jsx'
import Catalogo from "./components/Catalogo.jsx"
// import Carrito from "./components/Carrito.jsx"
import Contacto from "./components/Contacto.jsx"

function App() {

  const [currentPage, setCurrentPage] = useState("Catálogo")

  return (
    <>
    <h1>{currentPage}</h1>
      <NavBar 
        handlerCatalogo={() => setCurrentPage("Catálogo")}
        handlerCarrito={() => setCurrentPage("Carrito")}
        handlerContacto={() => setCurrentPage("Contacto")}
      />

      {currentPage === "Catálogo" && <Catalogo/>}
      {currentPage === "Carrito" && <Carrito/>}
      {currentPage === "Contacto" &&  <Contacto/>}


    </>
  )
}

export default App