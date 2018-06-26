// modules
const http = require('http');

// success json
const success = {
	  version: 1.0
	, name: 'Be Mean Api'
	, returned_at: (new Date()).toJSON()
};

// error json
const error = {
	message: 'Não encontrado'
}


http.createServer( function (req, res) {
	if(req.url === '/api/v1') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(success));
	} else {
		res.writeHead(404, {'Content-Type': 'application/json; charset=utf-8;'});
		res.write(JSON.stringify(error));
	}
	
	res.end()
}).listen(3000, function () {
	console.log('Servidor rodando na porta 3000');
});
