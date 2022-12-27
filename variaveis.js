// Var
var altura = 5;
var comprimento = 7;
area = altura * comprimento;
console.log(area);
var area;

// Let
let forma = 'triangulo';
let testeAltura2 = 3;
let testeComprimento2 = 5;

let testeArea2;

if (forma == 'retangulo'){
    testeArea2 = testeAltura2 * testeComprimento2;
}
else{
    testeArea2 = (testeAltura2 * testeComprimento2) / 2;
}
console.log(testeArea2)

//const
const formato = "triangulo";
const x = 4;
const y = 4;
let total;

if (formato === "quadrado"){
    total = x * y
}
else {
    total = x * y / 2;
}
console.log(total);
