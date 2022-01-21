const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()
        xhr.addEventListener('load', () => {
            if(xhr.status >=200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', (elemento) => {
    elemento.preventDefault()
    if (elemento.target.tagName === 'A') {
        carregaPagina(elemento)
    }
})

async function carregaPagina(elemento) {
    const req = {
        method: 'GET', 
        url: elemento.target.href
    }
    try {
        const response = await request(req)
        carregaResultado(response)
    } catch (error) {
        console.log(error)
    }
        
}

function carregaResultado(response) {
    document.querySelector('#pagina').innerHTML = response
}