function f1(callback) {
    setTimeout(() => {
        console.log('f1')
        if (callback) callback()
    }, 1000)
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2')
        if (callback) callback()
    }, 500);
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3')
        if (callback) callback()
    }, 100);
}

//f1(f2(f3()))// assim estaria chamando a função e não funcionaria

//f1(function() { // assim será passada uma função dentro da outra e esta função chamará a próxima
//    f2(function() {
//        f3(function() {
//            console.log('Olá mundo!')
//        })
//    })
//})

f1(f1CallBack)

function f1CallBack() {
    f2(f2CallBack)
}

function f2CallBack() { //este é o callback do f2
    f3(f3CallBack)
}

function f3CallBack() {
    console.log('Olá mundo!')
}