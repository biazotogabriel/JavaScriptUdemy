const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Gabriel', sobrenome: 'Biazoto' }
    //console.log('Passei por aqui')
    next()
}

// rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function (req, res) {
    //console.log(`Ultimo middleware: Olha oque tem na req.session.nome ${req.session.nome}`) middleware depois com função anônima
})
route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato/', contatoController.main)

module.exports = route