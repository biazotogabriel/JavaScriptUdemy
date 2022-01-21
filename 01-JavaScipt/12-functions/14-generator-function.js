function* geradora() {
    // código qualquer
    yield 'Valor 1';
    // código qualquer
    yield 'Valor 2';
    // código qualquer
    yield 'Valor 3';
}
const g1 = geradora()
//console.log(g1.next().value)
//console.log(g1.next().value)
//console.log(g1.next().value)
//console.log(g1.next())

function* gerador2() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}
const g2 = gerador2()
//console.log(g2.next().value)
//console.log(g2.next().value)
//console.log(g2.next().value)
//console.log(g2.next().value)
//console.log(g2.next().value)

function* gerador3() {
    yield 0
    yield 1
    yield 2
}

function* gerador4() {
    yield* gerador3()
    yield 3
    yield 4
    yield 5
}

const g4 = gerador4()

for (const valor of g4) {
    //console.log(valor)
}

function* geradora5() {
    yield function() {
        console.log('função 1')
    }

    yield function() {
        console.log('função 2')
    }

    return function() {
        console.log('vim do return')
    }

    yield function() {
        console.log('função 3')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value
const func4 = g5.next().value
func1()
func2()
func3()
func4()//essa função dara erro porque a função terminará no return