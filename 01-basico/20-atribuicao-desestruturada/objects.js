const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Biazoto',
    idade: 30,
    endereco: {
        rua: 'Sisvestre Serafim',
        numero: 765
    }
}

//const { nome, sobrenome, ...resto} = pessoa // atribuição via desestruturação
//const { nome, sobrenome, nascimento = 'sem data'} = pessoa // quando o campo não existe ele retorna o valor padrão definido // nascimento será igual a sem data
//const { nome: teste, sobrenome} = pessoa // colocando o nome da chave na frente voce especifica ao javascript que a variavel recebera o valor daquela chave.
//const { aa: teste = 'chave aa não existe'} = pessoa // nesta forma também é possivel definir valor padrão
//const { endereco: { rua, numero } } = pessoa // desta forma é possivel pegar valores de objetos dentro de objetos //console.log(rua, numero);
