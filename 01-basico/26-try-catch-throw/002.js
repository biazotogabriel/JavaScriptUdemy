function soma(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        //throw('x e y precisam ser numeros');// apenas a string
        throw new Error('x e y precisam ser numeros');// erro completo
    } 
    return x + y
} 

try {
    console.log(soma(1,2))
    console.log(soma(1,"2"))
} catch (error) {
//    console.log(error)
    console.log('Alguma coisa mais amigável para o usuário')

}