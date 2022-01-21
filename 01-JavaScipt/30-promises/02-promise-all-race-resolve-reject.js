function random(min = 0, max = 1) {
    return Math.floor(min + Math.random() * (max - min)) * 1000
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => { // cria uma promise usando o construtor da promise
        setTimeout(() => {
            if (typeof (msg) !== 'string') {
                reject('bad value') // resolve é quando resolve, reject é quando da erro. podemoudar os nomes, mas é uma convenção que todos usam.
                return
            }
            resolve(msg.toUpperCase() + ' resolveu')
        }, time);
    })
}

// Promise.all, tenta resolver todas as promises de um array
const promises = [
    'primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000), // se qualquer uma das promessas dar erro ele retorna o erro
    'outro valor'
]
Promise.all(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })

//Promise.race funciona como se fosse uma corrida.
// a primeira promise a ser resolvida será a valida. tanto para then quanto catch
const promises2 = [
    esperaAi('Promise 1', random(1, 5)),
    esperaAi('Promise 2', random(1, 5)),
    esperaAi('Promise 3', random(1, 5)),
    esperaAi(2000, random(1, 5)),
]

Promise.race(promises2)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })

//Promise.resolve gerá uma promessa resolvida.
// é util para os casos em que se espera que o retorno de uma função seja um promisse mas em um determinado ponto deseja-se forçar a solução da promisse conforme abaixo.
function baixaPagina() {
    const emChache = false
    if (emChache) {
        return Promise.resolve('Página em cache') //como a promise esta em cache ele retorna o resolve o mesmo funciona para reject
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}
baixaPagina()
    .then((resposta) => {
        console.log(resposta)
    })