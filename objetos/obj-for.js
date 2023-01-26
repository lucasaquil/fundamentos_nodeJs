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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && 'function'){
        console.log(`O cliente tem como chave ${chave}, seu valor é ${cliente[chave]}`);
    };
};