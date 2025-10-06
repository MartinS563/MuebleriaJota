import React from "react";

const NavBar = ({ handlerCatalogo, handlerCarrito, handlerContacto }) => {
  return (
    <>
      <nav>
        <button onClick={handlerCatalogo}>Catálogo</button>
        <button onClick={handlerCarrito}>Carrito</button>
        <button onClick={handlerContacto}>Contacto</button>
      </nav>
    </>
  );
};

export default NavBar;