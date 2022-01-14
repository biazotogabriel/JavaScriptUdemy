function Calculadora() {
    function insDig(dig) {
        return function () {
            this.displayCalc.value += dig
            this.checkError()
        }
    }
    this.display = document.querySelector('#display')
    this.displayCalc = document.querySelector('#display-calc')
    this.displayHistoric = document.querySelector('#display-historic')
    this.insParE = insDig('(')
    this.insParD = insDig(')')
    this.insPnt = insDig('.')
    this.insSoma = insDig('+')
    this.insSub = insDig('-')
    this.insMult = insDig('*')
    this.insDiv = insDig('/')
    this.ins0 = insDig('0')
    this.ins1 = insDig('1')
    this.ins2 = insDig('2')
    this.ins3 = insDig('3')
    this.ins4 = insDig('4')
    this.ins5 = insDig('5')
    this.ins6 = insDig('6')
    this.ins7 = insDig('7')
    this.ins8 = insDig('8')
    this.ins9 = insDig('9')
    this.clearDisplay = () => {
        if (this.displayCalc.value) {
            return this.displayCalc.value = ''
        }
        return this.displayHistoric.innerHTML = ''
    }
    this.delLast = () => {
        this.displayCalc.value = this.displayCalc.value.slice(0, -1)
        this.checkError()
    }
    this.checkError = () => {
        try {
            this.display.classList.remove('erro')
            eval(this.displayCalc.value)
            return false
        } catch {
            this.display.classList.add('erro')
            return true
        }
    }
    this.calcResult = () => {
        if (!this.checkError()) {
            this.displayHistoric.innerHTML = this.displayCalc.value
            this.displayCalc.value = eval(this.displayCalc.value)
        }
    }
    this.buttonsMonitor = () => {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'btnParE') return this.insParE()
            if (e.target.id === 'btnParD') return this.insParD()
            if (e.target.id === 'btnPnt') return this.insPnt()
            if (e.target.id === 'btnSoma') return this.insSoma()
            if (e.target.id === 'btnSub') return this.insSub()
            if (e.target.id === 'btnMult') return this.insMult()
            if (e.target.id === 'btnDiv') return this.insDiv()
            if (e.target.id === 'btn0') return this.ins0()
            if (e.target.id === 'btn1') return this.ins1()
            if (e.target.id === 'btn2') return this.ins2()
            if (e.target.id === 'btn3') return this.ins3()
            if (e.target.id === 'btn4') return this.ins4()
            if (e.target.id === 'btn5') return this.ins5()
            if (e.target.id === 'btn6') return this.ins6()
            if (e.target.id === 'btn7') return this.ins7()
            if (e.target.id === 'btn8') return this.ins8()
            if (e.target.id === 'btn9') return this.ins9()
            if (e.target.id === 'btnC') return this.clearDisplay()
            if (e.target.id === 'btnApg') return this.delLast()
            if (e.target.id === 'btnIgual') return this.calcResult()
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === '(') return this.insParE()
            if (e.key === ')') return this.insParD()
            if (e.key === '.') return this.insPnt()
            if (e.key === '+') return this.insSoma()
            if (e.key === '-') return this.insSub()
            if (e.key === '*') return this.insMult()
            if (e.key === '/') return this.insDiv()
            if (e.key === '0') return this.ins0()
            if (e.key === '1') return this.ins1()
            if (e.key === '2') return this.ins2()
            if (e.key === '3') return this.ins3()
            if (e.key === '4') return this.ins4()
            if (e.key === '5') return this.ins5()
            if (e.key === '6') return this.ins6()
            if (e.key === '7') return this.ins7()
            if (e.key === '8') return this.ins8()
            if (e.key === '9') return this.ins9()
            if (e.key === 'Delete') return this.clearDisplay()
            if (e.key === 'Backspace') return this.delLast()
            if (e.key === 'Enter' || e.key === '=') return this.calcResult()
        })
    }
}

const calculadora = new Calculadora()
calculadora.buttonsMonitor()