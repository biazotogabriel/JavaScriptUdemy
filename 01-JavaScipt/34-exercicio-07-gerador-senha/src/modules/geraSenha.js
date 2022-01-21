function randomNumber(min = 0, max = 9) {
    return Math.round(min + Math.random() * (max - min))
}

function randomUpper() {
    const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return uppers[randomNumber(0, uppers.length - 1)]
//    poderia ter feito assim também:
//    String.fromCharCode(randomNumber(65, 91)) -> para maiúsculas
}

function randomLower() {
    return randomUpper(0, 25).toLowerCase()
}

function randomSymbol() {
    const symbols = ['!','@','#','$','%','&','*','(',')','?']
    return symbols[randomNumber(0, symbols.length - 1)]
}

export default function geraSenha (gliphos = 8, numbers = true, upper = true, lower = true, symbol = true) {
    const functions = new Array
    numbers && functions.push(randomNumber) //circuit breaker
    upper && functions.push(randomUpper)
    lower && functions.push(randomLower)
    symbol && functions.push(randomSymbol)
    let senha = ''
    for (let index = 0; index < gliphos; index++) {
        senha += functions[randomNumber(0, functions.length - 1)]()
    }
    return senha
}