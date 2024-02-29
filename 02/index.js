let carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log('O seu carro já está ligado.');
        } else {
            this.ligado = true;
            console.log(`Você ligou o carro, velocidade: ${this.velocidade}.`);
        }
    },
    desligar: function () {
        if (this.ligado === false) {
            console.log('O seu carro já está desligado.');
        } else {
            this.ligado = false;
            console.log(`Você desligou o carro, velocidade: 0.`)
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log('Não é possivel acelerar pois seu caro está desligado.');
        } else {
            this.velocidade += 10;
            console.log(`O carro está a ${this.velocidade} km/h.`);
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log('Não é possivel desacelarar pois o carro está desligado.');
        } else {
            this.velocidade -= 10;
            console.log(`O carro está a ${this.velocidade} km/h.`);
        }
    },
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();