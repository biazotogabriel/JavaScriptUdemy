// filter -> sempre retornará um array com a mesma quantidade de elementos ou menos
// ele não altera o array original onde a função está sendo utilizada
// retorne os números maiores que 10
const numeros = [5, 59, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const filtrados = numeros.filter((valor, indice, array) => {
    // se tetorna falso o elemento não é colocado no novo array se verdadeiro ele inclui no novo array
    return valor > 10
})
const filtrados2 = numeros.filter(valor => valor > 10) // simplificando a função
console.log(filtrados2)

const pessoas = [
    {nome: 'Gabriel', idade: 27},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 52}
]

const nomesM5L = pessoas.filter(objeto => objeto.nome.length > 5)
const pessoasM50 = pessoas.filter(objeto => objeto.idade > 50)
console.log(nomesM5L)
console.log(pessoasM50)
console.log(pessoas)