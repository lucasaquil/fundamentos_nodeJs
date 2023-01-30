const dados = require("./clientes.json")

function buscaDados(lista, chave, valor){
    return lista.find((item => item[chave].includes(valor)));
};

const encontrado = buscaDados(dados, "nome", "Husein");
console.log(encontrado);
