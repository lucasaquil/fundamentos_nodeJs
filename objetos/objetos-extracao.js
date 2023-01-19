const cliente = {
    nome: "Gabi",
    idade: 26,
    telefone: '11985662310',
    email: 'lilgabi@dominio.com',
};

console.log(`O nome do individuo é ${cliente.nome}`);

console.log(`Os 3 primeiro digitos de seu numero são ${cliente.telefone.substring(0, 3)}`);

console.log(`O email do cliente é ${cliente["email"]}`);

const chaves = ['nome', 'idade', 'telefone', 'email'];

chaves.forEach( (chave) => {
    console.log(`O nome da chave é ${chave} e seu valor é ${cliente[chave]}`)
});