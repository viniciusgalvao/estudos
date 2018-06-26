'use strict';

const http = require('http');
const queryString = require('querystring');
const postData = queryString.stringify({
	name: 'Vi'
});

const options = {
	host: 'webschool-io.herokuapp.com',
	method: 'PUT',
	path: '/api/pokemons/566f443f80c86d11000c8745',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

function callback (res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: '+ JSON.stringify(res.headers));

	let data = '';

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		console.log('Dados Finalizados: '+ data);
	});
};

const req = http.request(options, callback);

req.on('error', (e) => {
	console.log('ERRO: ' + e.message);
});

// para enviar os dados
req.write(postData);

// finalizando a requisição
req.end();

// resultado {"__v":0,"name":"Vinícius Galvão","type":"aluno","_id":"566f443f80c86d11000c8745"}
