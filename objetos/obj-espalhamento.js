const cliente = {
    nome: 'joão',
    idade: 45,
    email: 'paidocorinthians@outlook.com',
    telefone: ['11 987666620', '11 25689874'],
};

cliente.enderecos = [
    {
    rua: 'Cuiaba',
    numero: 22,
    cep: '07966-222',
    complemento: 'casa',
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
};

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ... cliente.enderecos[0],
};

console.log(encomenda)