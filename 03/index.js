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
    nome: "Tenis Teste",
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
        const totalItens = this.calcularTotalDeItens();
        const totalAPagar = this.calculaTotalAPagar();


        console.log(`Total de Itens: ${totalItens}`);
        console.log(`Total a Pagar: ${(totalAPagar / 100).toLocaleString("en-US", { style: "currency", currency: "BRL" })}`);
    },

    addProduto: function (produto) {
        let tamanhoArray = 0;
        for (let produtoAtual of this.produtos) {
            tamanhoArray++;
            if (produtoAtual.id === produto.id) {
                produtoAtual.qtd += produto.qtd;
            } else if (tamanhoArray == this.produtos.length) {
                this.produtos.push(produto);
                return;
            }
        }
    },

    imprimirDetalhe: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        const totalItens = this.calcularTotalDeItens();
        const totalAPagar = this.calculaTotalAPagar();
        const desconto = this.calcularDesconto();
        let contador = 1;
        for (let produto of this.produtos) {
            const valorTotal = ((produto.qtd * produto.precoUnit) / 100).toFixed(2);
            console.log(`Item ${contador} - ${produto.nome} - ${produto.qtd} und - R$ ${valorTotal}`)
            contador++;
        }
        console.log(`Total de Itens ${totalItens} Itens`);
        console.log(`Total a Pagar: R$${(desconto / 100).toFixed(2)}`);

    },

    calcularTotalDeItens: function () {
        let qtdDeItens = 0;
        for (let item of this.produtos) {
            qtdDeItens += item.qtd;
        }
        return qtdDeItens;
    },

    calculaTotalAPagar: function () {
        let valorCompra = 0;
        for (let item of this.produtos) {
            valorCompra += item.qtd * item.precoUnit
        }
        return valorCompra;
    },

    calcularDesconto: function () {
        const precos = [];
        let desconto = 0;
        if (this.calcularTotalDeItens() > 4) {

            for (let item of this.produtos) {
                precos.push(item.precoUnit);
            }
        }
        const minimo = Math.min(...precos);

        if (this.calculaTotalAPagar() >= 100) {
            desconto = ((this.calculaTotalAPagar() * 10) / 100);
        }

        if (desconto / 100 > minimo / 100) {
            return (this.calculaTotalAPagar() - desconto);
        } else {
            return (this.calculaTotalAPagar() - minimo);
        }
    }
};



carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.addProduto(novoTenis1);
carrinho.imprimirResumo();
carrinho.imprimirDetalhe();
carrinho.calcularDesconto();