const dados = require("./clientes.json");

function filtro(clientes){
    return clientes.filter((cliente => {
            return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    })
    );
};
const clientesFiltrados = filtro(dados);
console.log(clientesFiltrados);