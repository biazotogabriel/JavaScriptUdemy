function meuEscopo () {
    const elementos = [
        { tag: 'h1', texto: 'Título'},
        { tag: 'p', texto: 'Frase 1'},
        { tag: 'div', texto: 'Frase 2'},
        { tag: 'footer', texto: 'Frase 3'},
        { tag: 'section', texto: 'Frase 4'}
    ]
    const container = document.querySelector('#container')
    for (let i = 0; i < elementos.length; i++) {
        const { tag, texto } = elementos[i]
        const elementoHTML = document.createElement(tag)
        const textoHTML = document.createTextNode(texto)
        elementoHTML.appendChild(textoHTML)
        container.appendChild(elementoHTML)      
    }
    
}
meuEscopo()




