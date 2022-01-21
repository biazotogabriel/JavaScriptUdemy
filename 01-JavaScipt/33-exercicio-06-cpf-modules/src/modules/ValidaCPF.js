export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperties(this, {
            cpfLimpo: {
                value: cpfEnviado.replace(/\D+/g, ''),
                writable: false,
                configurable: false,
                enumerable: false
            }
        })
    }
    static criaDigito(cpfParcial) { // geralmente quando a função não utiliza nenhum "this" ela pode ser convertida em static
        let cpfArray = Array.from(cpfParcial)
        let digito = cpfArray.reduce((acumulador, valor, indice, array) => {
            acumulador += (array.length + 1 - indice) * valor
            return acumulador
        }, 0)
        digito = 11 - digito % 11
        return digito > 9 ? 0 : digito
    }
    valida(){
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.cpfLimpo.length !== 11) return false
        const digito1 = ValidaCPF.criaDigito(this.cpfLimpo.slice(0, -2))
        const digito2 = ValidaCPF.criaDigito(this.cpfLimpo.slice(0, 10))
        const novoCPF = this.cpfLimpo.slice(0, 9) + digito1 + digito2
        return this.cpfLimpo === novoCPF
    }
}