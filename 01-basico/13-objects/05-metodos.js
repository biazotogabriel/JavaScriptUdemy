// Criando cópias de objetos
// Object.keys retorna um array com as chaves do objeto
// Object.values retorna um array com os valores do objeto
// Object.entries retorna um array com a chave e o valor do objeto dentro de outro array  
// Object.freeze() impede que objeto possa ser alterado nenhuma alteração nele será valida

const produto = { nome: 'Caneca', preco: 1.8 }
const outraCoisa = {
    ...produto, // com spread operator
    material: 'porcelana'
}
const caneca = Object.assign({}, produto, { material: 'porcelana' }) // usando Object.assign

outraCoisa.nome = 'Outro nome'
outraCoisa.preco = 2.5
//console.log(produto)
//console.log(outraCoisa)
//console.log(caneca)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // exibe o objeto com as configurações das propriedades do objeto
Object.defineProperty(produto, 'nome', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

