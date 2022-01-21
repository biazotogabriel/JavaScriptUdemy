let num1 = 10
let num2 = 2.5
console.log(num1.toString()+ num2) // 102.5
num1 = 250
console.log(num1.toString(2)) // converte o número para binário e string
//console.log(num1.toString(16)) // converte o número em hexadecimal e string
//console.log(num1.toString(7)) // converte o número em base 7 e string
//console.log(num1.toString(25)) // converte o número em base 25 e string
num1 = 10.126123
console.log(num1.toFixed(2)) // aredonda em 2 casas decimais
console.log(Number.isInteger(num1)) // verificar se o numero é inteiro
num1 = "a" * 2
console.log(Number.isNaN(num1)) // verificar se o numero é um NaN

// IEEE 754-2008
num1 = 0.7
num2 = 0.1
console.log(num1 + num2) // 0.799999999999999
console.log(num1 + num2 + num2 + num2) // 0.799999999999999
num1 += num2 + num2 + num2
num1 = parseFloat(num1.toFixed(2))
console.log(num1) // 0.799999999999999