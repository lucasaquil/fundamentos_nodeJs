const cliente = {
    nome: 'joão',
    idade: 45,
    email: 'paidocorinthians@outlook.com',
    telefone: ['11 987666620', '11 25689874'],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        } else{
            console.log(`Compra efetuada, seu saldo atual é de ${this.saldo - valor}`)
        }
    }
};

cliente.efetuaPagamento(250);
