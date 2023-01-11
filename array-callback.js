const nomes = ["Evaldo", "Mari", "Camis"];

// 3 formas de se escrever funçoes callback

//1
//nomes.forEach(function (nome) {
//   console.log(nome);
//})

//2
nomes.forEach((nome) => {
    console.log(nome);
})

//3
function impromenome (nome){
    console.log(nome)
}

nomes.forEach(impromenome)