import GeraCPF from './modules/GeraCPF.js'
import './assets/css/style.css'

(function meuEscopo() {
    const cpf = new GeraCPF()
    const divCPF = document.querySelector('.cpf-gerado')
    divCPF.innerHTML = cpf.geraNovoCPF()
})()