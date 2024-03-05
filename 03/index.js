// function addProdutosAoCarrinho(carrinho, produto) {
// };

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};
const novoTenis1 = {
    id: 4,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 12000
};

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Nome do Cliente: ${this.nomeDoCliente}`);
        let total = 0;
        let totalItens = 0;
        for (let item of this.produtos) {
            total += item.qtd * item.precoUnit
            totalItens += item.qtd

        }
        console.log(`Total de Itens: ${totalItens}`);
        console.log(`Total a Pagar: ${(total / 100).toLocaleString("en-US", { style: "currency", currency: "BRL" })}`);
    },

    addProduto: function (produto) {
        for (let produtoAtual of this.produtos) {
            if (produtoAtual.id === produto.id) {
                produtoAtual.qtd + produto.qtd;
            } else {
                this.produtos.push(produto);
                return;
            }
        }
    }
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.addProduto(novoTenis1);
carrinho.imprimirResumo();