const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)
console.log(alunos[0])

alunos[1] = 'Eduardo' // Altera o elemento
alunos[3] = 'Luiza' // Se o elemento não existe ele adiciona
alunos[alunos.length] = 'Gabriel' // Adiciona sempre no ultimo elemento
alunos.push('Rafael') // Adiciona um elemento ao final
alunos.unshift('Maria') // Adiciona um elemento no começo
const alunoRemovido = alunos.pop() // Remove o ultimo elemento e armazena na variavel
const alunoRemovido2 = alunos.shift() // Remove o primeiro elemento e armazena na variavel
delete alunos[2] // deleto o item mais deixa o espaço vazio
console.log(alunos)
console.log(alunos.slice(2,5)) // slice não altera o array original
console.log(alunos.slice(-2))
console.log(typeof alunos)
console.log(alunos instanceof Array)