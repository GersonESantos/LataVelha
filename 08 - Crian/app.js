// Import the express library
const express = require('express');
// importa o módulo mysql
const mysql = require('mysql2');
// App
const app = express();
// configuração do banco de dados

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gabibi89*',
    database: 'projeto'
}); 
// Conectar
conexao.connect(function(err){
    if(err) throw err;
    console.log('Conectado com sucesso!');
});

app.get('/', (req, res) => {
    res.write('Hello World!');
    res.end();
});

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });