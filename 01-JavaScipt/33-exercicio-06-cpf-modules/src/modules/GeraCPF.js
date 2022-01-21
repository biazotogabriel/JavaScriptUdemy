import ValidaCPF from './ValidaCPF.js'

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(min + Math.random() * (max - min)))
    }
    geraNovoCPF() {
        const cpfSemDigito = this.rand()
        const primeiroDigito = ValidaCPF.criaDigito(cpfSemDigito)
        const segundoDigito = ValidaCPF.criaDigito(cpfSemDigito+primeiroDigito)
        const novoCPF = cpfSemDigito + primeiroDigito + segundoDigito
        return GeraCPF.formataCPF(novoCPF)
    }
    static formataCPF(cpf) {
        const cpfLimpo = cpf.replace(/\D+/g, '')
        return (
            cpfLimpo.slice(0, 3) + '.' +
            cpfLimpo.slice(3, 6) + '.' +
            cpfLimpo.slice(6, 9) + '-' +
            cpfLimpo.slice(9, 11)
        )
    }
}