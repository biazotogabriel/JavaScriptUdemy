const express = require('express')
const app = express()
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


app.listen(3000, () => {
    console.log('Servidor ativo')
})