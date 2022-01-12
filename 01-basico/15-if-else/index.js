/**
 * Entre 0 e 11 - bom dia
 * Entre 12 - 17 - boa tarde
 * Entre 18 - 23 - boa noite
 */
// if pode ser usado sozinho
// Sempre que utilizo else precisa ter if atraz
// apenas posso ter um else sozinho

const hora = 13;
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Bom tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Bom noite')
} else {
    console.log('Olá')
}

const numero = 1
if (numero >= 0 && numero <= 5) {
    console.log('O número esta entre 0 e 5')
} else {
    console.log('O número não esta entre 0 e 5')
}