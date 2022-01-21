export const nome = 'Gabriel'
export const sobrenome = 'Biazoto'
export const idade = 30

export function soma(x, y) {
    return Number(x) + Number(y)
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}