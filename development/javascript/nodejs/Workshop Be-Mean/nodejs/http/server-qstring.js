var http = require('http')
  , url  = require('url');

http.createServer(function(req, res){

  // pegamos os parâmetros passados na url... ex: localhost:3000/?name=John&surname=Smith
  var result = url.parse(req.url, true);

  // write Header
  res.writeHead(200, {'Content-Type': 'text/html'});

  // write content
  res.write('<html><body>');
  res.write('<h1>Query String</h1>');
  res.write('<ul>');

  for (var key in result.query) {
    res.write('<li>' + key + ': ' + result.query[key] + '</li>');
  }

  res.write('</ul>');
  res.write('</body></html>');

  // output
  res.end();
}).listen(3000, function(){
    console.log('Servidor rodando na porta:3000');
});
