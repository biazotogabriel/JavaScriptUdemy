// Construtora -> é um molde (classe) que criará novos objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => 'Original ' + this.nome + ' ' + this.sobrenome // este aqui sobreescreve o do prototype
}
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

// Onde o JavaScript irá buscar a propriedade ou metodo??
// 1º pessoa1
// 2º Pessoa.prototype
// 3º Object.prototype

// instância - objeto que foi instanciado de uma construtora
const pessoa1 = new Pessoa('Gabriel', 'Biazoto')
const pessoa2 = new Pessoa('Rafael', 'Biazoto')

console.log(Pessoa.prototype === pessoa1.__proto__) // verdadeiro
console.log(pessoa1.nomeCompleto())