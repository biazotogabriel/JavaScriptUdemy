const nome = "Gabriel"
const sobrenome = "Biazoto"
const idade = 27
const peso = 80
const altura = 1.8
let imc = peso / altura ** 2
let anoNascimento = 2022 - idade
console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg tem", altura, "metros de altura e seu IMC é de ", imc)
console.log(nome, "nasceu no ano de", anoNascimento)
console.log(nome + " nasceu no ano de " + anoNascimento)
// Com template strings
console.log(`${nome} nasceu no ano de ${anoNascimento}`)
