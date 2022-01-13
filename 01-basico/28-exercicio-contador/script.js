function meuEscopo() {
    let segundos = 0
    let timmer

    function criaHora(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const relogio = document.querySelector('#relogio')
    document.addEventListener('click', (e) => {
        if (e.target.id === 'iniciar') {
            relogio.classList.remove('pausado')
            clearInterval(timmer)
            timmer = setInterval(() => {
                segundos++
                relogio.innerHTML = criaHora(segundos)
             }, 1000)
        }
        if (e.target.id === 'pausar') {
            clearInterval(timmer)
            relogio.classList.add('pausado')
        }
        if (e.target.id === 'zerar') {
            clearInterval(timmer)
            relogio.classList.remove('pausado')
            segundos = 0
            relogio.innerHTML = criaHora(segundos)
        }
    })
}
meuEscopo()