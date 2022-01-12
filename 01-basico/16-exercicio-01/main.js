function meuEscopo () {
    const form = document.querySelector('form')
    form.addEventListener('submit', recebeEventoForm)
    function recebeEventoForm (evento) {
        evento.preventDefault()
        let peso = Number(form.querySelector('#peso').value)
        let altura = Number(form.querySelector('#altura').value.replace(',', '.'))
        if (!peso || !altura) {
            setResultado('Altura ou peso preenchidos com números inválidos', false)
        } else {
            setResultado(getNivelImc(getImc(peso, altura)), true)
        }
    }

    function setResultado (msg, isValid) {
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = msg
        resultado.classList = isValid ? 'resultado--ok' : 'resultado--erro'
    }

    function getImc (peso, altura) {
        if (altura > 100) {
            return (peso / (altura/100) ** 2).toFixed(2)
        } 
        return (peso / altura ** 2).toFixed(2)
    }

    function getNivelImc (imc) {
        if (imc < 18.5) return 'Abaixo do peso'
        if (imc < 25) return 'Peso normal'
        if (imc < 30) return 'Sobrepeso'
        if (imc < 35) return 'Obesidade grau 1'
        if (imc < 40) return 'Obesidade grau 2'
        return 'Obesidade grau 3'
    }

}
meuEscopo()