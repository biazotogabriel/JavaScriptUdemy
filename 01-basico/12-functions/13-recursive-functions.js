// funções recursivas são funções que se chamam de volta
// funcionam como se fossem loops
// as funções recursivas tem limite pois a engine pode interpretar que existe um erro no códig se executar muitas vezes

function recursiva(max) {
    console.log(max)
    if (max >= 10) return
    max++
    recursiva(max)
}

recursiva(6)