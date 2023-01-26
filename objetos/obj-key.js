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

const chaves = Object.keys(cliente);

console.log(chaves);

if(!chaves.includes('enderecos')){
    console.log('Erro! Nenhum enderoço foi cadastrado');
}