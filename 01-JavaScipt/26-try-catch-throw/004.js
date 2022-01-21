function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }
    if (!data) {
        data = new Date()
    }
    return data.toLocaleTimeString('pt-br', { timeStyle: "short"})
}

try {
    console.log(retornaHora(''))
} catch (error) {
    console.log(error)
}