require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Base de dados conectada')
        app.emit('pronto')
    })
    .catch(e => console.log('Erro ao conectar'))


const routes = require('./routes')
const path = require('path')
const { middleWareGlobal } = require('./src/middlewares/middleware.js') //associação via desestruturação

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
//nossos prórpios middleware
app.use(middleWareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor escutando na porta 3000')
    })
})
