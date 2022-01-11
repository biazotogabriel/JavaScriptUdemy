const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Biazoto',
    idade: '25',
}
console.log(pessoa1.nome)

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade, 
    }
}

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa2 = criaPessoa('Kitila', 'Biazoto', 30)
const pessoa3 = criaPessoa('Rafael', 'Biazoto', 25)
const pessoa4 = criaPessoa('Kamila', 'Biazoto', 28)

console.log(pessoa1.nome, pessoa2.nome)

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade, 
        falar() {
            console.log(`${this.nome} ${this.sobrenome} está dizendo oi!`)
        }
    }
}
const pessoa5 = criaPessoa('Beatriz', 'Biazoto', 50) 
pessoa5.falar()