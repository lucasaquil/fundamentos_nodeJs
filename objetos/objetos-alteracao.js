const pessoa = {
    nome: 'Albert',
    profissao: 'Fisico',
    teoriaPrincipal: {
        nome: 'Relatividade Geral',
        data: 1995,
        comprovada: true,
    },
    ativo: false,
};


pessoa.telefone = '11 9856633356';

pessoa.nome = 'Albert estranho';

delete pessoa.teoriaPrincipal;
delete pessoa['telefone'];

console.log(pessoa);