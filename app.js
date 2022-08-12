const http = require('http');

http
  .createServer((req, res) => {
    // * Respuesta simple
    /*
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hola Mundo');
    */

    // * Enviar JSON
    /*
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    const persona = {
      id: 1,
      nombre: 'Ramón',
    };
    
    res.write(JSON.stringify(persona));
    */

    // * Enviar CSV
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Ramon\n');
    res.write('3, Maria\n');
    res.write('4, Juan\n');
    res.write('5, Pedro\n');

    res.end();
  })
  .listen(8080);

console.log('Escuchando puerto', 8080);
