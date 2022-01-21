document.addEventListener('click', (elemento) => {
    elemento.preventDefault()
    if (elemento.target.tagName === 'A') {
        carregaPagina(elemento)
    }
})

async function carregaPagina(elemento) {
    try {
        const response = await fetch(elemento.target.href) // o fetch já retorna uma promise
        if (response.status !== 200) throw new Error('ERRO 404')
        const html = await response.text() // para retornar o texto da promise precisa utilizar a função text que retorna outra promise
        carregaResultado(html)
    } catch (error) {
        console.log(error)
    }
    
}

function carregaResultado(response) {
    document.querySelector('#pagina').innerHTML = response
}