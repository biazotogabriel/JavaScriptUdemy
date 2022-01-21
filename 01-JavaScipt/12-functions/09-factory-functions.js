//funções fábrica são funções que criam objetos
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() { //getter
            return this.nome + ' ' + this.sobrenome
        },
        set nomeCompleto(valor) { //setter
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        altura,
        peso,
        fala : function(assunto) { //metodo
            return `${nome} está ${assunto} e pesa ${this.peso}`
        },
        fala2 (assunto) { // também é possivel declarar metodos desta forma mais curta //metodo
            return `${nome} está ${assunto}`
        },
        //getter
        get imc() { 
            return (peso / altura ** 2).toFixed(2)
        },
    }
}
const p1 = criaPessoa('Gabriel', 'Biazoto', 1.80, 80)
console.log(p1.fala('ocupado'))
console.log(p1.fala2('ocupado'))
console.log(p1.nome)
console.log(p1.imc)
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Rafael Nuernberg Biazoto'
console.log(p1.nomeCompleto)
