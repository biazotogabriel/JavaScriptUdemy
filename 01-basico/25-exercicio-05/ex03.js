eFizz = (n) => n % 3 === 0 ? true : false
eBuzz = (n) => n % 5 === 0 ? true : false

function FizzBuzz (n) {
    if (typeof(n) !== 'number') return n
    if (eFizz(n) && eBuzz(n)) return 'FizzBuzz'
    if (eFizz(n)) return 'Fizz'
    if (eBuzz(n)) return 'Buzz'
    return n
}

for (let i = 0 ; i <= 100 ; i++ ) {
    console.log(FizzBuzz(i))
}