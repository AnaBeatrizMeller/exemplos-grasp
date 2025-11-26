class ProdutoSemCreator {
  constructor(nome, preco, tipo, quantidade, tamanho) {
    this.nome = nome;
    this.preco = preco;
    this.tipo = tipo;
    this.quantidade = quantidade;
    this.tamanho = tamanho;
  }

  adicionarCarrinho() {
    const pedido = new PedidoSemCreator();
    pedido.adicionarItem(this);
    return pedido;
  }
}

class PedidoSemCreator {
  constructor() {
    this.itens = [];
  }

  adicionarItem(produto) {
    this.itens.push(produto);
  }
}

console.log("=== VERSÃO SEM CREATOR (ERRADA) ===");
const produtoErrado = new ProdutoSemCreator("Camiseta", 49.9, "roupa", 1, "M");
const pedidoErrado = produtoErrado.adicionarCarrinho();
console.log(pedidoErrado);

//--------------------------------------------
class ProdutoComCreator {
  constructor(nome, preco, tipo, quantidade, tamanho) {
    this.nome = nome;
    this.preco = preco;
    this.tipo = tipo;
    this.quantidade = quantidade;
    this.tamanho = tamanho;
  }
}

// CREATOR: Pedido é responsável por criar e armazenar itens
class PedidoComCreator {
  constructor() {
    this.itens = [];
  }

  adicionarProduto(produto) {
    this.itens.push(produto);
  }
}

console.log("Com creator: ");
const pedidoCorreto = new PedidoComCreator();
const produtoCorreto = new ProdutoComCreator("Tênis", 199.9, "sapato", 1, "42");

pedidoCorreto.adicionarProduto(produtoCorreto);

console.log(pedidoCorreto);
