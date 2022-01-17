const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
]

const novasPessoas = new Map()

for (const { id, nome } of pessoas) {
    novasPessoas.set(id, { id, nome })
}
console.log(novasPessoas)
console.log(novasPessoas.get(2))
for (const pessoas of novasPessoas) {
    console.log(pessoas)
}
novasPessoas.delete(2)
console.log(novasPessoas)