import ValidaCPF from './cpf.js'

class ValidaForm {
    constructor() {
        this.form = document.querySelector('#form')
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.limpaErros()
            if (this.validar()) this.enviaForm()
        })
    }
    enviaForm() {
        console.log('enviou')
    }
    limpaErros() {
        for (const erro of this.form.querySelectorAll('.input-error')) {
            erro.remove()
        }
    }
    validar() {
        let valid = true //flag
        for (const input of this.form.querySelectorAll('.validar')) {
            if (this.isEmptyInput(input)) {
                this.criaErro(input, `Campo não pode estar em branco`)
                valid = false
            }
            if (input.id === 'usuario' && !this.onlyWordsNumbers(input)) {
                this.criaErro(input, `Utilizar apenas letras e numeros`)
                valid = false
            }
            const validaCPF = new ValidaCPF(input.value)
            if (input.id === 'cpf' && !validaCPF.valida()) {
                this.criaErro(input, `CPF inválido`)
                valid = false
            }
            if (input.id === 'senha' && (input.value.length < 6 || input.value.length > 12)) {
                this.criaErro(input, `Senha deve conter de 6 a 12 caracteres`)
                valid = false
            }
            if (input.id === 'confirmaSenha' && (input.value !== senha.value)) {
                this.criaErro(input, `Confirmação da senha incorreta`)
                valid = false
            }
        }
        return valid
    }
    criaErro(input, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('input-error')
        input.insertAdjacentElement('afterend', div)
    }
    isEmptyInput(input) {
        return !input.value
    }
    onlyWordsNumbers(input) {
        return !input.value.match(/\W/)
    }
}

const form = new ValidaForm