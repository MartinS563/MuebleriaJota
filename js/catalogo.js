export async function cargarCatalogo() {
  const contenedor = document.getElementById("catalogo");
  const estado = document.getElementById("estado");
  
  if (!contenedor) return;

  try {
    estado.textContent = "Cargando productos...";
    const respuesta = await fetch("#");
    if (!respuesta.ok) {
      throw new Error("Error al cargar productos");
    }
    const productos = await respuesta.json();
    estado.textContent = "";
    contenedor.innerHTML = "";

    productos.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";

      const img = document.createElement("img");
      img.src = p.imagen;
      img.alt = p.nombre;

      const h2 = document.createElement("h2");
      h2.textContent = p.nombre;

      const descripcion = document.createElement("p");
      descripcion.textContent = p.descripcion;

      const precio = document.createElement("strong");
      precio.textContent = `$${p.precio}`;

      const boton = document.createElement("button");
      boton.textContent = "Ver más";
      boton.addEventListener(
        "click",
        () => (window.location.href = `detalle.html?id=${p.id}`)
      );

      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(descripcion);
      div.appendChild(precio);
      div.appendChild(boton);
      contenedor.appendChild(div);
    });
  } catch (error) {
    estado.textContent = "Hubo un problema al cargar los productos.";
    console.error(error);
  }
}