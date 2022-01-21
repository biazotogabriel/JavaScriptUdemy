function random(min = 0, max = 1) {
    return Math.floor(min + Math.random() * (max - min)) * 1000
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => { // cria uma promise usando o construtor da promise
        setTimeout(() => {
            if (typeof (msg) !== 'string') {
                reject('bad value')
                return
            }
            resolve(msg + ' resolveu')
            return
        }, time);
    })
}

//esperaAi('Frase 1', random(0, 3))
//    .then(valor => {
//        console.log(valor)
//        return esperaAi('Frase 2', random(0, 3))
//    })
//    .then(fase => {
//        console.log(fase)
//        return esperaAi('Frase 3', random(0, 3))
//    })
//    .then(fase => {
//        console.log(fase)
//        return fase
//    })
//    .then(fase => {
//        console.log('Terminamos na fase' + fase)
//    })
//    .catch(erro => {
//        console.log(erro)
//   })
// async e await permite substituir todo a encadeiamento do código acima para uma forma bem mais simples..
async function executa() {
    try {
        const fase1 = await esperaAi('Frase 1', random(0, 3))
        console.log(fase1)
        const fase2 = await esperaAi('Frase 2', random(0, 3))
        console.log(fase2)
        const fase3 = await esperaAi(34, random(0, 3))
        console.log(fase3)
        console.log('Terminamos na fase 3')
    } catch (error) {
        console.log(error)
    }
}
executa()

// estados das promises..
// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada