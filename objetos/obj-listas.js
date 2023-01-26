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

cliente.enderecos.push({
    rua: 'Lenini',
    numero: 55,
    cep: '02222333',
    complemento: 'apartamento',
});


const listaAP = cliente.enderecos.filter((endereco => endereco.complemento === 'apartamento'));

console.log(listaAP);