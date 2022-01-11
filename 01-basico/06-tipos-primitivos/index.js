//string, number, undefined, null, boolean

const nome1 = "Gabriel" // string
const nome2 = 'Gabriel' // string
const nome3 = `Gabriel` // string
const num1 = 27 // number
const num2 = 10.45 // number
let nomeAluno // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null // Nulo -> não aponta para local nenhum na memória
const aprovado = false // boolean = true ou false (lógico)
console.log(typeof nome1, nome1)

let a = 2
const b = a
console.log(a, b)
a = 3
console.log(a, b)