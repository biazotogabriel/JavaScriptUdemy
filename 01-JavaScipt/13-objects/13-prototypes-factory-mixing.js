// acoplando
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

function criaPessoa(nome, sobrenome) {
    interna = () => {
        console.log(`função interna`)
    }

    const pessoaPrototype = {
        ...falar,
        ...beber,
        ...comer
    }
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome,
        }
    })
}

const p1 = criaPessoa('Gabriel', 'Biazoto')
const p2 = criaPessoa('Maria', 'Biazoto')
p1.beber()
p2.beber()
console.dir(p1)
console.log(Object.getOwnPropertyDescriptor(p1, 'interna'))
console.log(Object.getOwnPropertyDescriptor(p1, 'sobrenome'))