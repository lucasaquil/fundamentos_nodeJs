const notas = [10, 9.5, 8, 7, 6];

//modificando o valor de uma array com forEach

//notas.forEach(nota => {
//    nota += 1;
//    console.log(nota);
//});

//modificando o valor de uma array com map()

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas)