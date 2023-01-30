const Livro = function (nome, editora, paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome;
    };
    this.getEditora = function(){
        return gEditora;
    };
    this.getPaginas = function(){
        return gPaginas;
    };
};

const livroXR = new Livro('XR', 'The Code', 851);

console.log(livroXR.getNome());
console.log(livroXR.getEditora());
console.log(livroXR.getPaginas());

///////////////////////////

class LivroClasse {
    constructor(nome, editora, paginas){
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas;
    };
    anuncio(){
        console.log(`Compre já seu livro da ${this.editora}, o novo best-seller de ${this.paginas} paginas, compre agora ${this.nome}!`);
    };
};

const livroXY = new LivroClasse('XY', 'The Code', 130);
livroXY.anuncio()

class livroColecao extends LivroClasse {
    constructor(nome, nomeDaColecao){
        super(nome),
        this.nomeDaColecao = nomeDaColecao;
    };

    descreverColecao(){
        console.log(`O livro ${this.nome} pertence a coleção ${this.nomeDaColecao}`);
    };
};

const livroXV = new livroColecao("XV", "XS");

livroXV.descreverColecao();
