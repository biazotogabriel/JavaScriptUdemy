const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if (numero === 2) {
      //  console.log('pulei o dois')
        continue; // continue pula para a próxima iteração do loop
    }
  //  console.log(numero) // 1 3 4 5 6 7 8 9
}

for (let numero of numeros) {
    if (numero === 7) {
        console.log('7 encontrado')
        break; // break interrompe o laço definitivamente e sai do bloco
    }
    console.log(numero) // 1 2 3 4 5 6
}