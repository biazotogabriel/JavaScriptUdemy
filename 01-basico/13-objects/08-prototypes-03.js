function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(precentual) {
    this.preco = this.preco - (this.preco * precentual / 100)
}

Produto.prototype.aumento = function(precentual) {
    this.preco = this.preco + (this.preco * precentual / 100)
}

const p1 = new Produto('Caneca', 10)
p1.aumento(100)
console.log(p1.preco)
p1.desconto(100)
console.log(p1.preco)

const p2 = {
    nome: 'Caneca',
    preco: 1
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(100)
console.log(p2.preco)

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'copo'
    },
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 3
    }
})
console.log(p3)