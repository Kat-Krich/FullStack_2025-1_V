var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta) {
    resposta.redirect('Aula 9/index.html')
})
app.get('/inicio', function(requisicao, resposta) {
    resposta.redirect('Aula 1/index.html')
})
app.post('/inicio', function(requisicao, resposta) {
    resposta.redirect('Aula 1/index.html')
})

app.get('/cadastrar', function(requisicao, resposta) {
    var nome = requisicao.query.nome;
    var usuario = requisicao.query.usuario;
    var senha = requisicao.query.senha;
    var data = requisicao.query.data;
    resposta.redirect('home.html')
})

app.post('/cadastrar', function(requisicao, resposta) {
    var nome = requisicao.body.nome;
    var usuario = requisicao.body.usuario;
    var senha = requisicao.body.senha;
    var data = requisicao.body.data;
    resposta.render('resposta', {nome, usuario, senha, data});
})

// app.post('/valor', function(requisicao, resposta) {
//     var valor = requisicao.body.valor;
//     resposta.render('resposta', {valor});
// })