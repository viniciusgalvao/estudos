var net = require('net');
var clients = [];

var server = net.createServer(function(socket){
  socket.name = socket.remoteAddress + ":" + socket.port;
  socket.setEncoding('utf-8');
  clients.push(socket);

  socket.write("Ola " + socket.name + "\r\n");
  broadcast(socket.name + " entrou no chat!!\r\n", socket);

  function broadcast(msg, sender) {
    clients.forEach(function(client){
      if (client == sender) return;
      client.write(msg);
    });
  }

  var message = '';

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
    message += data;
    if (message.indexOf("\n") != -1) {
        broadcast(socket.name + "> " + message + "\r\n", socket);
        message = '';
    }
  });

  socket.on('end', function(){
    clients.splice(clients.indexOf(socket), 1);
    broadcast(socket.name + " deixou o chat! \r\n", socket);
  })

}).listen(4000, function(){
  console.log('Servidor mini-chat foi iniciado!!');
});
