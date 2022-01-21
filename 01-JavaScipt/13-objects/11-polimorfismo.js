// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag:${this.agencia} | CC:${this.conta} | Saldo: ${this.saldo}`)
}

//const conta1 = new Conta('04073', '726070', 1000)

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) { //Polimorfismo fará com que em contacorrente o metodo funcione de forma diferente
    if ((this.saldo + this.limite) < valor) {
        console.log('Saldo insuficiente')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

//const cc = new ContaCorrente('04073', '726070', 100, 100)
//cc.depositar(10)
//cc.sacar(150)
//cc.sacar(100)

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cc = new ContaCorrente('04073', '726070', 100, 100)
cc.depositar(10)
cc.sacar(150)

const cp = new ContaPoupanca('04073', '726070', 100)
cp.depositar(10)
cp.sacar(150)