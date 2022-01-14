// IIFE Immediately Invoked Function Expression
// são funções invocadas imediatamente na sua criação
(function (idade, peso, altura) {
    const sobrenome = 'Biazoto'
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome(nome) {
        console.log(nome)
    }
    falaNome(criaNome('Gabriel'))
    
})(27, 80, 180)
