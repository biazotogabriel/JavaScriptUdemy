function ValidaCPF(cpf) {
    //this.cpf = cpf    
    Object.defineProperties(this, {
        cpfLimpo: {
            configurable: false,
            get: () => cpf.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    const digito1 = this.criaDigito(this.cpfLimpo.slice(0, -2))
    const digito2 = this.criaDigito(this.cpfLimpo.slice(0, 10))
    const novoCPF = this.cpfLimpo.slice(0, 9) + digito1 + digito2
    return this.cpfLimpo === novoCPF
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    let cpfArray = Array.from(cpfParcial)
    let digito = cpfArray.reduce((acumulador, valor, indice, array) => {
        acumulador += (array.length + 1 - indice) * valor
        return acumulador
    }, 0)
    digito = 11 - digito % 11
    return digito > 9 ? 0 : digito
}


    const cpf = new ValidaCPF('091.261.189-80')
    console.log(cpf)
    console.log(cpf.cpfLimpo)
