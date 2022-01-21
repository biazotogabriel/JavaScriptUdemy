async function carregaPagina() {
    axios('pessoas.json')
        .then(resposta => {
            carregaElementos(resposta.data)
            console.dir(resposta)
        })
//    try {
//        const response = await fetch('pessoas.json') 
//        const json = await response.json() 
//        carregaElementos(json)
//    } catch (error) {
//       console.log(error)
//   }
}

carregaPagina()

function carregaElementos(json) {
    const table = document.createElement('table')
    for (const pessoa of json) {
        const tr = document.createElement('tr')
        for (const key in pessoa) {
            if (['nome', 'email'].indexOf(key) >= 0) {
                const td = document.createElement('td')
                td.innerText = pessoa[key]
                tr.appendChild(td)
            }
        }
        table.appendChild(tr)
    }
    document.querySelector('#tabela').appendChild(table)
}