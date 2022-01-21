function random(min = 0, max = 1) {
    return Math.floor(min + Math.random() * (max - min)) * 1000
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => { // cria uma promise usando o construtor da promise
        if (typeof(msg) !== 'string') reject('bad value') // resolve é quando resolve, reject é quando da erro. podemoudar os nomes, mas é uma convenção que todos usam.
        setTimeout(() => {
            resolve(msg)
        }, time);
    })
}

esperaAi('Frase 1', random(1, 3))
    .then(resposta => { // sempre que chamar resolve o then é executado.
        console.log(resposta)
        return esperaAi(2222, random(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', random(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('ultimo')
    })
    .catch(e => { // sempre que chamar reject o catch é executado.
        console.log(e)
    }) 
    .then(() => {
        console.log('depois do erro')
    })

console.log('Isso será exibido antes')