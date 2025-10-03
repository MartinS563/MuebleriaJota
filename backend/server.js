const express = require("express")
const app = express()

// Middleware global para loguear cada petición
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.json());

const { infoRouter } = require("./routes/info")
app.use("/", infoRouter)

const { productosRouter } = require("./routes/productos")
app.use("/api/productos", productosRouter)

// Rutas no definidas
app.use((req, res, next) => {
  next(createError(404, "Ruta no encontrada"))
})

app.use((err, req, res, next) => {
    // Seteo el código de estado. Si el error no tiene uno, es un 500 (Error Interno del Servidor).
    res.status(err.status || 500)
    res.json({
        error: {
            status: err.status,
            message: err.message || 'Ha ocurrido un error en el servidor.',
            // Solo mostramos el detalle del error si no estamos en producción
            stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        }
    })
})

require('dotenv').config();
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server escuchando ${PORT}`)
})