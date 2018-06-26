'use strict';

const http = require('http');

process.nextTick(() => {
  console.log("Eu sou um Async");
});


console.log(process.execPath);
console.log(process.cwd());

console.log(process.pid)

let server = http.createServer((req, res) => {

});

server.listen(3000, () => {});

process.on('SIGINT', () => {
  console.log("Saindo...");
  process.exit();
});
