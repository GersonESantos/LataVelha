// Import the express library
const express = require('express');
// importa o módulo mysql
const mysql = require('mysql2');
// App
const app = express();

app.get('/', (req, res) => {
    res.write('Hello World!');
    res.end();
});

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });