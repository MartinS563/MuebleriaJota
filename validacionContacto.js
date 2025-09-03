formularioContacto.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario y se recargue la página

  let nombre = document.getElementById('nombreUsuario').value.trim();
  let email = document.getElementById('emailUsuario').value.trim();
  let mensaje = document.getElementById('mensajeUsuario').value.trim();

  let errores = [];

  if (!nombre) errores.push('Nombre no completado');
  if (!email) errores.push('Email no completado');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push('Correo electrónico inválido.'); // El email debe contener caracteres válidos seguido de una arroba seguido de caracteres validos
  if (!mensaje) errores.push('Mensaje no completado');

  if (errores.length > 0) {
        let mensajeError = ''
        mensajeError = errores.join('\n');
        alert(mensajeError);
        return;
    } else {
        alert('¡Gracias! Su consulta fue enviada con éxito.'); // Si todo es válido, muestra un mensaje de éxito
        formularioContacto.reset();
    }
});