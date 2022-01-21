const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [pN, sN] = numeros
// é a mesma coisa que
// const pN = numeros[0]
// const sN = numeros[1]
const [pN2, sN2, ...resto] = numeros // pega o resto do array ... = rest operator
const numeros2 = [5, 3, 2, 6, 3, 8, 6, 9]
const [pN3, , sN3] = numeros2 // pega valores pulando indices
const [pN4, , sN4, ...resto2] = numeros2 // pega o resto sem pegar o valor pulado

const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [,[,, seis]] = numeros3 // 6
const [,, seis2] = numeros3[1] // 6
console.log(seis2)