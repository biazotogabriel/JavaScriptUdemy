// reduce

const numeros = [5, 59, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//some todos os elementos
const total = numeros.reduce((acumulador, valor, indice, array) => {//reduce funcionando criando um total
    acumulador += valor
    return acumulador
}, 0) // valor inicial do reduce
//retorne um array com os pares
const pares = numeros.reduce((acumulador, valor) => { //reduce funcionando como filter
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []) // valor inicial do reduce
//retorne um array com o dobro dos valores
const dobro = numeros.reduce((acumulador, valor) => { //reduce funcionando como map
    acumulador.push(2 * valor)
    return acumulador
}, []) // valor inicial do reduce
console.log(total)
console.log(pares)
console.log(dobro)

const pessoas = [
    { nome: 'Gabriel', idade: 27 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 52 }
]
// retorn a pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, objeto) => {
    if (acumulador.idade > objeto.idade) return acumulador
    return objeto //altera o valor do acumulador
}) // quando não definido o valor inicial o valor inicial para a ser o primeiro item do array
console.log(maisVelha)
