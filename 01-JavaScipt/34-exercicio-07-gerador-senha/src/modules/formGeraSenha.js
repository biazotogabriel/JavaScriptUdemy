import geraSenha from './geraSenha.js'

export default () => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('gerar-button')) {
            const senhaGerada = document.querySelector('.senha-gerada')
            senhaGerada.innerHTML = gera()
        }
    })
}

function gera() {
    
    const qtCaracteres = Number(document.querySelector('.qt-caracteres').value)
    const addNumeros = document.querySelector('.add-numeros').checked
    const addUppers = document.querySelector('.add-letters-upper').checked
    const addLowers = document.querySelector('.add-letters-lower').checked
    const addSymbols = document.querySelector('.add-symbols').checked
    return geraSenha(qtCaracteres, addNumeros, addUppers, addLowers, addSymbols)
}