function saudacao(nome) {
    return 'Olá ' + nome
}
console.log(saudacao('Gabriel'))
console.log(saudacao('Maria'))
saudacao('João')

function soma (a, b = 3) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))

const raiz = function (n) {
    return n ** 0.5
}
console.log(raiz(9))

const raizCubica = n => n ** (1/3)
console.log(raizCubica(64))