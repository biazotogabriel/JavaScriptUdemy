try {
    console.log(naoexiste)
} catch (e) {
    console.log('Variável não existe')
    console.log(e) //nunca mostrar o erro completo para o usuario final
}