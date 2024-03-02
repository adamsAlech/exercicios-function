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
        for (let produto of this.produtos) {
            total += produto.qtd * produto.precoUnit
            totalItens += produto.qtd

        }
        console.log(`Total de Itens: ${totalItens}`);
        console.log(`Total a Pagar: ${(total / 100).toLocaleString("en-US", { style: "currency", currency: "BRL" })}`);
    }
};
carrinho.imprimirResumo();