function meuEscopo() {
    const form = document.querySelector('#form')
    //    form.onsubmit = function (evento) {
    //        evento.preventDefault()
    //        alert(1)
    //   }
    const pessoas = []
    function recebeEventoForm(evento) {
        evento.preventDefault()
        const nome = form.querySelector('#nome').value
        const sobrenome = form.querySelector('#sobrenome').value
        const peso = form.querySelector('#peso').value
        const altura = form.querySelector('#altura').value
        const resultado = form.querySelector('#resultado')
        pessoas.push({ nome, sobrenome, peso, altura })
        resultado.innerHTML += `<p> ${nome} ${sobrenome} ${peso} ${altura} <p/>`
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();