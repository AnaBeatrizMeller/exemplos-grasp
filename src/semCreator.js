class Produto {
    constructor(nome, preco, tipo, quantidade, tamanho) {
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
        this.quantidade = quantidade;
        this.tamanho = tamanho;
    }
}

class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionar(produto) {
        this.itens.push(produto);
    }
}


const p1 = new Produto("Camiseta", 49.90, "roupa", 1, "M");
const p2 = new Produto("Tênis", 259.90, "sapato", 1, "42");

const carrinho = new Carrinho();

carrinho.adicionar(p1);
carrinho.adicionar(p2);
console.log("---------------------------------------------")
console.log("Carrinho (SEM Creator):", carrinho);
console.log("---------------------------------------------")

