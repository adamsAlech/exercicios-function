const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        const deposito = ['Deposito',
            valor]
        this.saldo += valor;
        if (valor > 0) {
            this.historicos.push(deposito);
            return (`Deposito de R$${valor / 100} relizado para o(a) cliente: ${this.nome}.`);
        }
    },

    sacar: function (valor) {
        const sacar = ['Saque',
            valor]
        if (valor > this.saldo) {
            return (`Saldo insuficiente para o saque de: ${this.nome}.`)
        } else {
            this.saldo -= valor
            this.historicos.push(sacar);
            return (`Saque de R$${valor / 100} relizado pelo o(a) cliente: ${this.nome}.`);
        }
    },

    extrato: function () {
        let deposito = 0;
        let saque = 0;
        for (let extrato of this.historicos) {
            if (extrato[0] === 'Deposito') {
                deposito += extrato[1];
            } else {
                saque += extrato[1];
            }

        }
        return `Extrato de ${this.nome} - Saldo R$${this.saldo}
Histórico:
Depósito de R$${deposito / 100}
Saque de R$${saque / 100}`
    },
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
//console.log(contaBancaria);