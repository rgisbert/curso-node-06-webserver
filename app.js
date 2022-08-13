const path = require('path');

const express = require('express');
const hbs = require('hbs');

const app = express();

const port = 8080;

// hbs
app.set('view engine', 'hbs');
hbs.registerPartials(path.resolve() + '/views/partials');

// ! Servir contenido estático (middleware)
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Render de hbs
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
});

app.get('/generic', (req, res) => {
  // Render de hbs
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  // Render de hbs
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node',
  });
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
