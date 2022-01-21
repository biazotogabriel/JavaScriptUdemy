// new Objects -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    //__proto__: objA
}

Object.setPrototypeOf(objB, objA) //define o prototype de um objeto
Object.getPrototypeOf(objB) //retornar o prototype de um objeto
console.log(objB.__proto__)
console.log(objB.chaveA) //consigo acessar a chave a do objA
