// defineProperty - defineProperties
function Produto(nome, preco, estoque, custo) {
    this.nome = nome
    Object.defineProperties(this, {//varias chaves
        estoque: {
            enumerable: true, // true mostra a chave
            configurable: false, // true pode apagar ou reconfigurar a chave
            get: () => { //get obtem o valor
                return estoque
            },
            set: (valor) => { //set seta o valor
                if (typeof valor !== 'number') throw new TypeError('Tipo precisa ser um numero')
                estoque = valor
            }
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3, 1.5)
//console.log(p1.estoque)
p1.estoque = 4
//console.log(p1.estoque)


function criaProduto(nome) {
    return {
        get nome() { //get obtem o valor
            return nome
        },
        set nome(valor) { //set seta o valor
            nome = valor
        }
    }
}

const p2 = criaProduto('Camiseta')
//console.log(p2.nome)
p2.nome = 'asd'
//console.log(p2.nome)