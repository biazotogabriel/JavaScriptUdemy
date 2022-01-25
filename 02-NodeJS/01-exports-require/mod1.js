class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falaNome() { return `${this.nome} ${this.sobrenome}` }
}



exports.Pessoa = Pessoa

//exports = { isso não funcionará pq trocaria a referencia de exports de module.exports
//} para isso é preciso apontar module
// module.exports = { ... }

this.qualquerCoisa = 'Oque eu quiser exportar'