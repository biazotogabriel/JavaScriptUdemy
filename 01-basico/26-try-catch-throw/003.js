try {
    console.log('abri o arquivo')
    console.log('manuipulei o arquivo')
    console.log('fechei o arquivo')
    try {
        console.log(b)   
    } catch (error) {
        console.log('deu erro no aninhamento')   
    } finally {
        console.log('finally sempre executa')   
    }
} catch (error) {
    // É executado quando há erro
    console.log('tratando o erro')
} finally {
    // Sempre é executado
    console.log('eu sempre sou executado')
}