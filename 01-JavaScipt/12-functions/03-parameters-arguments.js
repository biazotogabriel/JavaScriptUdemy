function funcao() { //arguments contem todos os argumentos passados
    let total = 0
    for (const argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
funcao(2, 4, 3, 3, 2) //{ '0': 'valor', '1': 1, '2': 2, '3': 3, '4': 4 } 

function funcao2(a, b) { //arguments contem todos os argumentos passados
    console.log(arguments[2])
}
funcao2(2, 4, 3) //{ '0': 'valor', '1': 1, '2': 2, '3': 3, '4': 4 } 

function funcao3(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
} // ele considera undefined se o parametro declarado não é passado
funcao3(1, 2, 3) //1 2 3 undefined undefined undefined

function funcao4(a = 0, b = 5, c = 10) { //argumentos com valores padrões definidos
    console.log(a + b + c)
}
funcao4(0, undefined, 10) // enviando undefined no valor que não se deseja declarar ele define como se não tivesse e assume o valor padrão

//desestruturação de objeto
function funcao5({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
funcao5({ nome: 'Gabriel', sobrenome: 'Biazoto', idade: 25 })
let obj = { nome: 'Gabriel', sobrenome: 'Biazoto', idade: 25 }
funcao5(obj)

//desestruturação de arrays
function funcao6([n1, n2, n3]) {
    console.log(n1, n2, n3)
}
funcao6([1, 2, 3]) // 1, 2, 3
let array = [1, 2, 3]
funcao6(array) // 1, 2, 3

//rest operator traz todos os demais parametros passados
const funcao7 = function (operador, acumulador, ...numeros) {
    for (const numero of numeros) {
        acumulador += numero
    }
    console.log(acumulador)
}
funcao7('+', 0, 20, 30, 40, 50)

//arrow functions não traz os arguments
const funcao8 = () => {
    console.log(arguments)
}
funcao8('+', 0, 20, 30, 40, 50)
