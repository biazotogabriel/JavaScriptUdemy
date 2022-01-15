const numeros = [5, 59, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const resultado = numeros
    .filter(valor => valor % 2 === 0) //filtra os pares
    .map(valor => valor * 2) //dobra os valores
    .reduce((ac, valor) => ac + valor) //soma os valores
console.log(resultado)
