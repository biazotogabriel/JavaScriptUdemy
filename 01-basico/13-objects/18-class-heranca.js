class Dispositivo { //criando uma classe
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ligado`)
            return
        }
        this.ligado = true
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} desligado`)
            return
        }
        this.ligado = false
    }
}

class Smartphone extends Dispositivo { //extends define que a classe será uma extensão de outra classe
    constructor(nome, cor, modelo) {
        super(nome) // carregar o construtor da classe pai definida no extends
        this.cor = cor
        this.modelo = modelo
    }

}

const s1 = new Smartphone('iPhone', 'Branco', 'MiA3')
console.log(s1)

class iPhone extends Smartphone {
    constructor (nome, cor, modelo, versao) {
        super(nome, cor, modelo)
        this.versao = versao
    }
}

const i1 = new iPhone('iPhone', 'Branco', 'MiA3', '1.1.2')
console.log(i1)