// Funções são first-class objects (Objetos de primeira classe)

// declaração de função (function hoisting)
falaOi()
function falaOi() {
    console.log('Oi')
}
falaOi()
// no caso acima o javaScript irá elevar a declaração para o topo do arquivo logo pode-se chamar ela em qualquer momento do código

// Function expression
const souUmDado = function () {
    console.log('Sou um dado')
}
function executaFuncao(funcao) {
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const objeto = {
    falar () {
        console.log('Estou falando...')
    }
}
objeto.falar()

