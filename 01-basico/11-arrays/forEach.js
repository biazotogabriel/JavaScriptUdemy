// forEach disponivel apenas dentro dos arrays
// semelhante ao map, filter e deduce porem apenas itera
const numeros = [5, 59, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

numeros.forEach((valor, indice, array) => {
    //console.log(valor, indice, array)
})
let total = 0
numeros.forEach(valor => total += valor)
console.log(total)