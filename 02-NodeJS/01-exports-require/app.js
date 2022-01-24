const path = require('path') // path é um modulo padrão do node. Por isso não precisa apontar o caminho
const axios = require('axios') // axios apesar de ter sido instalado não precisa apontar o caminho também
const mod1 = require('./mod1') //importa o modulo1 como um objeto com tudo oque foi colocado no exports do modulo importado
const { Pessoa } = mod1
const p1 = new Pessoa('Rafael', 'Nuernberg')
console.log(p1.falaNome())
//console.log(path)
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then((resposta) => {
        console.log(resposta.data)
    })
    .catch((erro) => {
        console.log(erro)
    })