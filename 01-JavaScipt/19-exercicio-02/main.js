meuEscopo()

function meuEscopo () {
    section = document.querySelector('#container')    
    section.appendChild(criaH1(fullDateText(new Date())))
}

function getTextDay(day) {
    switch (day) {
        case 0: return 'domingo'
        case 1: return 'segunda'
        case 2: return 'terça'
        case 3: return 'quarta'
        case 4: return 'quinta'
        case 5: return 'sexta'
        case 6: return 'sabado'
        default: return ''
    }
}

function getTextMonth(month) {
    switch (month) {
        case 0: return 'janeiro'
        case 1: return 'fevereiro'
        case 2: return 'março'
        case 3: return 'abril'
        case 4: return 'maio'
        case 5: return 'junho'
        case 6: return 'julho'
        case 7: return 'agosto'
        case 8: return 'setembro'
        case 9: return 'outubro'
        case 10: return 'novembro'
        case 11: return 'dezembro'
        default: return ''
    }
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function fullDateText (date) {
    return `${getTextDay(date.getDay())}, 
            ${date.getDate()} de 
            ${getTextMonth(date.getMonth())} de 
            ${date.getFullYear()} - 
            ${zeroEsquerda(date.getHours())}:
            ${zeroEsquerda(date.getMinutes())}`
}

function criaH1 (content) {
    h1 = document.createElement('h1')
    h1.innerHTML = content
    return h1
}