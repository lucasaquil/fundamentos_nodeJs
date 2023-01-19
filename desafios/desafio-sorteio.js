let numerosSortidos = [0, 0, 0, 0, 0, 0];

function contaNumero(){
    const numeros = numerosSortidos.map((numero) => {
        let arredonda = Math.floor(Math.random() * 59);
            return (numero + arredonda) + 1;
    });
    console.log(`Estes são seus numeros do jogo ${numeros}, boa sorte!!!!!!`);
};

contaNumero();
