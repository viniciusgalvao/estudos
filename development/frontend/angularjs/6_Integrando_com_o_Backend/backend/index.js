var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))
app.use(express.bodyParser());


var contatos = [
	{id: 1, nome: "bruno da silva", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2}},
	{id: 2, nome: "SANDRA MOREIRA DE OLIVEIRA", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1}},
	{id: 3, nome: "carlos MACHADO", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3}}
];

var autoIncrementId = 3;

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function (req, res) {
  contatos.forEach(function (contato) {
    if (contato.id == req.params.id) {
      res.json(contato);
      return;
    }
  });

  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  autoIncrementId++;
  req.body.id = autoIncrementId;
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
