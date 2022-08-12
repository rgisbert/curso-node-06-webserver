const express = require('express');
const path = require('path');

const app = express();

const port = 8080;

// ! Servir contenido estático (middleware)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/public/index.html');
});

app.get('/generic', (req, res) => {
  res.sendFile(path.resolve() + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.sendFile(path.resolve() + '/public/elements.html');
});

// * Ruta personalizada
// ! Si existe /public/hola-mundo/index.html, le dará prioridad por encima de esta
app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo desde ruta propia');
});

// ! Ruta comodín
// ? Cualquiera que no haya capturado antes, saltará esta.
app.get('*', (req, res) => {
  res.sendFile(path.resolve() + '/public/404.html');
});

// Levantar el servidor en el puerto indicado
app.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port}/`);
});
