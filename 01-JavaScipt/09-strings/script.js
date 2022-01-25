let umaString = "Um \"texto\"" // a barra invertida "\" cria um escape para o proximo caracter
console.log(umaString) // Um "texto"
umaString = "Uma barra \\" // caso queira incluir barra invertida ela precisa ser inserida duas vezes
console.log(umaString) // Um "texto"

console.log(umaString[2]) // imprime a terceira letra "a"
console.log(umaString.charAt(2)) // imprime a terceira letra "a"
console.log(umaString.concat(" concatenei ", "duas vezes")) // concatena um texto a direita
console.log(umaString.indexOf("barra")) // retorna a posição em que a palavra barra começa caso não ache nada ele retorna -1
umaString = "Um texto"
console.log(umaString.indexOf("o", 3)) // retorna a posição da letra o após a posição 3
console.log(umaString.lastIndexOf("o", 2)) // retorna a posição da letra o começando de traz para frente
console.log(umaString.search(/[a-z]/)) // semelhante ao indexOf porem aceita expreções regulares
console.log(umaString.replace('texto', 'texto grande')) // substitui textos
console.log(umaString.replace('t', 'T')) // substitui textos
console.log(umaString.replace(/t/g, 'T')) // com expresões regulares ele repete várias vezes usando a flag g
umaString = "O rato roeu a roupa do rei de roma."
console.log(umaString.length)
console.log(umaString.slice(2, 5)) // rat
console.log(umaString.slice(2, 6)) // rato
console.log(umaString.slice(-3)) // oma -> quando colocado negativo o slice considera o tamanho total menos o valor referenciado
console.log(umaString.slice(-5, -1)) // oma
console.log(umaString.split("r")) // divide a string sempre que tiver um r
console.log(umaString.split(" ", 2)) // divide a string no " " duas vezes
console.log(umaString.toUpperCase()) // TUDO MAIUSCULO