// let tem escopo de bloco {...bloco...}
// var tem escopo de função apenas

//Quando se declara let dentro do bloco ele serve apenas para aquele bloco
// logo se eu declarar um variavel que já existe em outro bloco ela não será alterada.
let nome = 'Gabriel'
//nome = 'Gabriel'
if (true) {
    //nome = 'Gabriel'
    let nome = 'Rafael'
    //nome = 'Rafael'
    if (true) {
        //nome = 'Rafael'
        let nome = 'Kamila'
        //nome = 'Kamila'
        console.log(nome)
    }
    //nome = 'Rafael'
    console.log(nome)
}
//nome = 'Gabriel'
console.log(nome)

//Quando se declara var dentro do bloco se está redeclarando a mesma variavel que está fora do bloco
// logo se eu declarar um variavel que já existe em outro bloco ela será redeclarada
// dentro de blocos de funções var funcional igual a let.
var nomeV = 'Gabriel'
//nome = 'Gabriel'
if (true) {
    //nome = 'Gabriel'
    var nomeV = 'Rafael'
    //nome = 'Rafael'
    if (true) {
        //nome = 'Rafael'
        var nomeV = 'Kamila'
        //nome = 'Kamila'
        console.log(nomeV)
    }
    //nome = 'Kamila'
    console.log(nomeV)
}
//nome = 'Kamila'
console.log(nomeV)

{
    var a = 1 
    let b = 2
}
console.log(a) //exibirá 1
console.log(b) //dará erro pois b pertence apenas ao bloco