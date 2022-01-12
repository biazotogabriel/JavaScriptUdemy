/**
 * shor-circuit é um recurso do javascript que permite que seja feita a verificação de varios pontos até um valor ser verdadeiro ou falso, isso é possivel pois o resultado dos operadores lógicos é sempre o valor da variavel ou função
 * 
 * valores que o JavaScript avalia como falso:
 * false
 * 0
 * '' "" ``
 * null undefined
 * NaN
 */


console.log('Luiz otávio' && 0 && 'Maria') // quando usado && ele retornará o primeiro falso que encontrar e se todos forem verdadeiros ele retornará o último neste caso ele retornará 0
const corPadrao = null
console.log(corPadrao || 'vermelho') // quando usado || ele retornará o primeiro verdadeiro que encontrar e se todos forem falsos ele retornará o último neste caso ele retornará vermelho
console.log('Luiz otávio' && 1 && 'Maria') // retorna Maria
console.log(false || 0 || null) // retorna null
