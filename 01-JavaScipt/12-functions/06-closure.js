function retornaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFuncao('Gabriel')
const funcao2 = retornaFuncao('Rafael')
console.log(funcao(),funcao2())

// o closure é a habilidade da função em acessar o seu escopo léxico