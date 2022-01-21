// Produto -> aumento, desconto
// Camiseta = cor, Caneca = material

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = quantia => this.preco += quantia
Produto.prototype.desconto = quantia => this.preco -= quantia

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => estoque,
        set: valor => estoque = valor,
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Grande', 4.5, 'Vidro', 5)
caneca.estoque = 10
console.log(caneca)
console.log(caneca.estoque)
//console.log(camiseta)