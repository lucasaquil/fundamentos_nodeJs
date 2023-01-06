const numerosPares = [2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7];

const numerosMix = [...numerosImpares, ...numerosPares]; // une as listas
numerosMix.sort(); // coloca a lista em ordem

const listaParesEImpares = [numerosImpares, numerosPares] // apenas concatena as lista em uma sem unilas diretamente 

console.log(listaParesEImpares);

for(let numero of numerosMix) {
    console.log(`numero ${numero}`) // percorre toda a lista
}