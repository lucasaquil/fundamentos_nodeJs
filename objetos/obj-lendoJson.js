const dados = require('./obj-cliente.json');

console.log(dados);

const clienteString = JSON.stringify(dados);

console.log(clienteString);

const normalizacao = JSON.parse(clienteString);
console.log(normalizacao);