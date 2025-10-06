import { useState } from "react";
import "../../../css/contacto.css";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let errores = [];

    // Validación de nombre
    if (!nombre.trim()) errores.push("Nombre no completado.");
    else if (nombre.trim().length < 3)
      errores.push("El nombre debe tener al menos 3 caracteres.");

    // Validación de email
    if (!email.trim()) errores.push("Email no completado.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errores.push("Correo electrónico inválido.");

    // Validación de mensaje
    if (!mensaje.trim()) errores.push("Mensaje no completado.");

    if (errores.length > 0) {
      alert(errores.join("\n"));
      return;
    }

alert("¡Gracias! Su consulta fue enviada con éxito. \nNos pondremos en contacto a la brevedad.");
  };

  return (
    <section>
      <h1 id="titulo-contacto">ENVIAR UNA CONSULTA</h1>
      <h4 className="subtitulo-contacto">
        Estamos aquí para escucharte y acompañarte, con la misma dedicación con
        la que damos forma a cada pieza.
      </h4>
      <h4 className="subtitulo-contacto">
        Compartinos tus dudas o inquietudes aquí abajo y nos pondremos en
        contacto para resolverlas juntos.
      </h4>

      <form id="formularioContacto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreUsuario">NOMBRE</label>
          <input
            type="text"
            id="nombreUsuario"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="emailUsuario">CORREO ELECTRÓNICO</label>
          <input
            type="text"
            id="emailUsuario"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="mensajeUsuario">MENSAJE</label>
          <textarea
            id="mensajeUsuario"
            name="mensaje"
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
}