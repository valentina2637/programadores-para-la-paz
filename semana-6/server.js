const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ruta anterior de registro
app.post('/registro', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.json({ estado: "Datos recibidos", nombre, mensaje });
});

// NUEVA RUTA: Registro de incidencia
app.post('/incidencia', (req, res) => {
  const { tipo, descripcion } = req.body;
  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en puerto ${port}`);
});


