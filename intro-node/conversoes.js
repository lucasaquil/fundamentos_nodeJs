// tipos de dados
// booleanos

//conversao implicita
const numero = 123;
const numeroString = '123';

//conversao explicita
//Number()
//String()

console.log(numero + Number(numeroString));

let telefone = 12341234;
// console.log("O telefone é " + String(telefone));
 // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + telefone.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado));
// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
// usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

let largura = "10";
let altura = "5";
console.log( + largura * + altura); 
// teremos a conversão de String para números realizado usando o + antes das variáveis

console.log(Number(usuarioConectado));
// teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
