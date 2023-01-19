const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosImpares, ...numerosPares];

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];
console.log(numeros);

//const [nome = 'Lucas'] = [5];

const pessoa = {
    nome: 'Lucas',
    idade: 17
}

const telefone = {
    ...pessoa, telefoneDaPessoa: 11953845389
};


const {nome} = pessoa;

function imprimeDados({nome, idade}){
    return nome, idade;
}

console.log(imprimeDados(pessoa));



