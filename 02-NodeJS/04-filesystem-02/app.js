const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const write = require('./modules/write.js')
const read = require('./modules/read.js')

const pessoas = [
    { nome: 'joao', idade: 20 },
    { nome: 'maria' },
    { nome: 'eduardo' },
    { nome: 'luiza' },
]

const json = JSON.stringify(pessoas, '', 2)
//write(caminhoArquivo, json)
async function leArquivo(caminho) {
    const dados = await read(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val));
}
leArquivo(caminhoArquivo)
//const pessoas2 = await JSON.parse(await read(caminhoArquivo))
//console.log(pessoas2)