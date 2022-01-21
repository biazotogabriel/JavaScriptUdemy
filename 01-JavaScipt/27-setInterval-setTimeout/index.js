function mostrarHora() {
    let data = new Date
    return data.toLocaleTimeString('pt-br', { hour12: false })
}

const timmer = setInterval(() => console.log(mostrarHora()), 1000);

setTimeout(() => clearInterval(timmer), 5000);

setTimeout(() => console.log('olá mundo'), 6000);