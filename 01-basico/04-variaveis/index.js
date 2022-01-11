// Não podemos criar variáveis com valores reservados
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// Variáveis são case-sensitive
// Não podemos redeclarar variáveis quando criada com let
// NÃO UTILIZE VAR, UTILIZE LET

let nome = "Gabriel"
console.log(nome + " nasceu em 1984")
console.log("Em 2000",nome,"conheceu Maria")
console.log("Maria teve 1 filho com",nome,"em 2015")
console.log("O filho de",nome,"se chama Eduardo")

let semDeclarar;
console.log(typeof(semDeclarar))

let sobrenome;
sobrenome = "Biazoto"
console.log("O sobre nome de",nome,"é",sobrenome)