const data0 = new Date(0) // 01/01/1970 Timestamp unix ou época unix
tresHoras = 3 * 60 * 60 * 1000 // equivalente a 3 horas em milesimos de segundos
const data0GMT = new Date(tresHoras) // 01/01/1870 Timestamp unix ou época unix
umDia = 24 * 60 * 60 * 1000 // equivalente a 1 dia em milesimos de segundos
const dataAtual = new Date() // Data atual
const dataEspecifica = new Date(2019, 3, 20, 15, 14, 27, 500) // Data especificada a,m,d,h,m,s,milesimos
const dataEspecifica2 = new Date(2019, 3) // Data especificada com ano e mes
const dataEspecifica3 = new Date('2019-04-20 08:20:59') // Com data string
const data = new Date() // Com data string
console.log(data.toString())
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)// o mês retorna a contar de 0 então... 0 = janeiro | 1 = fevereiro ....
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Sec', data.getSeconds())
console.log('M S', data.getMilliseconds())
console.log('Dia semana', data.getDay())// retorna em numero sendo 0 = domingo
console.log(Date.now())
console.log(formataData(new Date()))

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const sec = zeroEsquerda(data.getSeconds())
    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}