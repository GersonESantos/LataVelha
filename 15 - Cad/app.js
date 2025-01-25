// Import the express library
const express = require('express');

// Importa fileupload
const fileUpload = require('express-fileupload');

// Importa o módulo express-handlebars
const { engine } = require('express-handlebars');

// importa o módulo mysql
const mysql = require('mysql2');
// App
const app = express();

//  habilita o fileupload
app.use(fileUpload());

// Adiciona o bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// Adiciona o css
app.use('/css', express.static('./css'));
// configuração do handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
// configuração do banco de dados
// manipulação de dados
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Conexão com o banco de dados
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

// Rota de cadastro


// Rota para cadastro
app.post('/cadastrar', function(req, res){
    // Obter os dados que serão utiliados para o cadastro
    let nome = req.body.nome;
    let valor = req.body.valor;
    let imagem = req.files.imagem.name;

    // SQL
    let sql = `INSERT INTO produtos (nome, valor, imagem) VALUES ('${nome}', ${valor}, '${imagem}')`;
        
    // Executar comando SQL
    conexao.query(sql, function(erro, retorno){
        // Caso ocorra algum erro
        if(erro) throw erro;

        // Caso ocorra o cadastro
        req.files.imagem.mv(__dirname+'/imagens/'+req.files.imagem.name);
        console.log(retorno);
    });


});



    // Redirecionar

app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });