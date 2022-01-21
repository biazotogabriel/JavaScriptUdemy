// objeto é delimitado por {}
const pessoa = {
    chave: 'valor',
    nome: 'Gabriel',
    sobrenome: 'Biazoto'
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])

const pessoa2 = new Object();
pessoa2.nome = 'Gabriel'
pessoa2.sobrenome = 'Biazoto'
pessoa2.falaNome = function() {
    console.log(this.nome)
}
console.log(pessoa2)
pessoa2.falaNome()
Object.freeze(pessoa2) // não permite mais alterar nada no objeto