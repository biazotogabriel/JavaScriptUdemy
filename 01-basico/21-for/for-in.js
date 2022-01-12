const frutas = ['maça', 'banana', 'carambola', 'melancia', 'pera', 'uva']

//iterar é realizar um lop em um array/vetor
for (const i in frutas) {
    //console.log(frutas[i])
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Biazoto',
    idade: 27
}
console.log(pessoa.nome)
console.log(pessoa['nome']) //mais dinamico

//iterar é realizar um lop em um array/vetor
for (const key in pessoa) {
    console.log(key, ":", pessoa[key]) // impime a chave e o valor
}