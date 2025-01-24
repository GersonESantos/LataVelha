// Import the express library
const express = require('express');

// Importa o módulo express-handlebars
const { engine } = require('express-handlebars');

// importa o módulo mysql
const mysql = require('mysql2');
// App
const app = express();
// configuração do handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
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
// Rota Principal
app.get('/', (req, res) => {
    res.render('formulario');
});

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });