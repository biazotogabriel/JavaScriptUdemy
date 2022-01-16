// defineProperty - defineProperties
function Produto(nome, preco, estoque, custo) {
    this.nome = nome
    Object.defineProperty(this, 'estoque', {//uma chave só
        enumerable: true, // true mostra a chave
        value: estoque, // valor da chave
        writable: false, // true pode alterar o valor da chave
        configurable: true // true pode apagar ou reconfigurar a chave
    })
    Object.defineProperties(this, {//varias chaves
        preco: {
            enumerable: true, // true mostra a chave
            value: preco, // valor da chave
            writable: false, // true pode alterar o valor da chave
            configurable: false // true pode apagar ou reconfigurar a chave
        },
        custo: {
            enumerable: false, // true mostra a chave
            value: custo, // valor da chave
            writable: false, // true pode alterar o valor da chave
            configurable: false // true pode apagar ou reconfigurar a chave
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3, 1.5)
console.log(p1)
console.log(Object.keys(p1))
