const _velocidade = Symbol('velocidade')
console.log(_velocidade)
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0 //_velocidade por ser simbol será uma propriedade privada da Class Carro
    }
    get velocidade() {
        return this[_velocidade]
    }
    set velocidade(valor) {
        if (valor >= 0 && valor <= 100) {
            this[_velocidade] = valor
        }
    }
    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }
    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

for (let i = 0; i <= 200; i++) {
    c1.acelerar()
}

console.log(c1)
c1.velocidade = 50
console.log(c1.velocidade)