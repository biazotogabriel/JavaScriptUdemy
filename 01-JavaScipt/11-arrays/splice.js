const nomes = ['Maria','Joao', 'Eduardo', 'Gabriel', 'Júlia']
//shift remove um elemento no inicio do array e atualiza o indice
//unshift adiciona um elemento no inicio do array e atualiza o indice
//push adiciona um elemento ao final do array
//pop remove um elemento ao final do array

//nomes.splice(indice, delete, elem1, elem2, elem3, elem4)

//const removidos = nomes.splice(4, 1) //[ 'Maria', 'Joao', 'Eduardo', 'Gabriel' ] remove 1 elemento a partir do indice 4
//const removidos = nomes.splice(-2, 1) //[ 'Maria', 'Joao', 'Eduardo', 'Gabriel' ] remove 1 elemento a partir do indice 3
//const removidos = nomes.splice(-2, 1) //[ 'Maria', 'Joao', 'Eduardo', 'Júlia' ] remove 1 elemento a partir do indice 3
//const adicionados = nomes.splice(3, 0, 'Luiz') //[ 'Maria', 'Joao', 'Eduardo', 'Luiz', 'Gabriel', 'Júlia' ] não remove nenhum elemento e adiciona Luiz no indice 3
//nomes.splice(3, 2, 'Luiz', 'Otávio') //[ 'Maria', 'Joao', 'Eduardo', 'Luiz', 'Otávio' ] remove dois itens no indice 3 e adiciona Luiz e Otávio
console.log(nomes)