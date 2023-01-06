const alunosSala = ["Everaldo", "Modric", "Ney", "Ted", "Peter"];
const mediasSala = [6, 7, 5, 4, 9];

const listaGeral = [alunosSala, mediasSala];

function conferindoLista (aluno){
    if(listaGeral[0].includes(aluno)){
        const [alunos, medias] = listaGeral;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`O aluno ${aluno}, esta presente e a media de sua nota é ${mediaDoAluno} pontos`);
    } else{
        console.log(`Aluno não encontrado`)
    }
}
console.log(conferindoLista('Modric'));