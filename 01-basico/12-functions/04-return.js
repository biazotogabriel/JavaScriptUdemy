function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}
const fala = falaFrase('Olá')
const resto = fala('mundo')
console.log(resto)
console.log(falaFrase('Olá')('mundo'))

// função closure
function criaMultiplicador (nultiplicador) {
    return function (n) {
        return n * nultiplicador
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
console.log(duplica(2),triplica(2),quadriplica(2))