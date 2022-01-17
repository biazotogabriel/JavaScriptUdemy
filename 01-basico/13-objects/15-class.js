class Pessoa { //classes já criam os prototypes automáticamente...
    constructor (nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() { // os metodos já sao declarados no prototype
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Gabriel', 'Biazoto')
console.dir(p1)