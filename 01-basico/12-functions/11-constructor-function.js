// Função construtora ->  objetos
// Função fabrica -> objetos
// ambas servem para objetos
// Construtora precisa escrever iniciando em maiuscula.
// ao criar precia adicionar a palavra new na frente
// para criar a função construtora basta iniciar a função com a letra maiuscula
function Pessoa(nome, sobrenome) {
    const id = 123456;
    const metodoInterno = function () { return id }
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => {
        return 'Sou um método'
    }
}

const p1 = new Pessoa('Gabriel', 'Bizoto')
const p2 = new Pessoa('Rafael', 'Bizoto')
console.log(p2.nome)
console.log(p2.metodo())
