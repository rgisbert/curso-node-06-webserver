const express = require('express');
const app = express();
const port = 8080;

// * Inicio
app.get('/', (req, res) => {
  res.send('Home');
});

// * Ruta personalizada
app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde ruta propia');
});

// ! Ruta comodín
// ? Cualquiera que no haya capturado antes, saltará esta.
app.get('*', (req, res) => {
  res.send('404 | Page not found');
});

app.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port}/`);
});
