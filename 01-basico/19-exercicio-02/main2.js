meuEscopo()

function meuEscopo () {
    section = document.querySelector('#container')
    const date = new Date()
    dataText = date.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: "full" })
    section.appendChild(criaH1(dataText))
}

function criaH1 (content) {
    h1 = document.createElement('h1')
    h1.innerHTML = content
    return h1
}