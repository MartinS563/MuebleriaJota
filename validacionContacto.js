function mostrarMensajeExito() {
  const mensaje = document.getElementById("mensajeExito");
  mensaje.style.display = "flex"; // lo muestra como overlay
}

const formularioContacto = document.getElementById('formularioContacto');

formularioContacto.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario y se recargue la página

  const nombre = document.getElementById('nombreUsuario').value.trim();
  const email = document.getElementById('emailUsuario').value.trim();
  const mensaje = document.getElementById('mensajeUsuario').value.trim();

  let errores = [];

  if (!nombre) errores.push('Nombre no completado.');
  if (!email) errores.push('Email no completado.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push('Correo electrónico inválido.'); // El email debe contener caracteres válidos + arroba + caracteres válidos + punto + caracteres válidos
  if (!mensaje) errores.push('Mensaje no completado.');

  if (errores.length > 0) {
        let mensajeError = errores.join('\n'); // Concatena los errores en un solo mensaje separado por saltos de línea
        alert(mensajeError);
        return;
    } else {
        mostrarMensajeExito(); // Si todo es válido, muestra un mensaje de éxito
        formularioContacto.reset();
    }
});

document.getElementById("cerrarMensaje").addEventListener("click", () => {
    document.getElementById("mensajeExito").style.display = "none";
});