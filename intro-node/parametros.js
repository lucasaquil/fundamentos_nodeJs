function soma(x, y){
    return x + y;
}


console.log(soma(5, 5));
//console.log(soma(515, -588));
//console.log(soma(255, 465));

// os parametros possuem ordem

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e tenho ${idade} anos`;
}
console.log(nomeIdade('darth vader', 00))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}
console.log(multiplica(soma(4, 5)));

