// map -> altera os valores do array
// dobre os valores dos numeros
const numeros = [5, 59, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros.map((valor, indice, array) => {
    // se tetorna falso o elemento não é colocado no novo array se verdadeiro ele inclui no novo array
    return 2 * valor
})
const dobro2 = numeros.map(valor => 2 * valor) // simplificando a função
//console.log(dobro2)

const pessoas = [
    { nome: 'Gabriel', idade: 27 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 52 }
]

const apenasNomes = pessoas.map(objeto => objeto['nome'])
const apenasIdadesObj = pessoas.map(objeto => ({ idade: objeto.idade }))
const comIds = pessoas.map((objeto, indice) => {
    const newObj = { ...objeto } //criado novo objeto para nao alterar o objeto original
    newObj.id = indice
    return newObj
})
console.log(comIds)
console.log(pessoas)