// Método estático -> static method
// O metodo de instância tem acesso aos dados da instância do objeto
// O metodo de estático não pode ser acessado pela instância e é disponivel apenas na classe

class ControleRemoto {
    constructor (tv) {
        this.tv = tv
        this.volume = 0
    }
    aumentarVolume () { // método de instância chamado nas instâncias
        this.volume += 2
    }
    diminuirVolume () { // método de instância chamado nas instâncias
        this.volume -= 2
    }
    static trocaPilha () { // metodos estáticos estão disponiveis apenas na classe e não as instâncias
        console.log('OK, vou trocar')
    }
}

const controle1 = new ControleRemoto
//controle1.trocaPilha() //não executa pois o metodo é estático, logo disponivel apenas na classe
ControleRemoto.trocaPilha()
console.log(controle1)