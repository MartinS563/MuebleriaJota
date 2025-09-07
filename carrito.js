// carrito.js
let carrito = [];
const contadorCarrito = document.getElementById("cart-count");

// 🔹 Cargar carrito guardado al iniciar
function cargarCarrito() {
  const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = guardado;
  actualizarContador();
}

// 🔹 Actualizar número en el header
function actualizarContador() {
  if (contadorCarrito) {
    contadorCarrito.textContent = carrito.length;
  }
}

// 🔹 Agregar producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}

// 🔹 Conectar botones "Añadir al carrito"
function prepararBotones() {
  const botones = document.querySelectorAll(".btn--add");
  botones.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const producto = {
        id: index + 1,
        nombre: btn.parentElement.querySelector("h3").innerText,
        precio: btn.parentElement.querySelector(".product-card__price").innerText,
      };
      agregarAlCarrito(producto);
    });
  });
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  cargarCarrito();
  prepararBotones();
});
