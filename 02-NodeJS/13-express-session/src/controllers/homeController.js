const HomeModel = require('../models/HomeModel')

//HomeModel.create({
//    titulo: 'Titulo teste',
//    descricao: 'descricao teste'
//})
//    .then(dados => console.log(dados))
//    .catch(erro => console.log(erro))

//HomeModel.find()
//    .then(dados => console.log(dados))
//    .catch(erro => console.log(erro))    

exports.paginaInicial = (req, res, next) => {
    //req.session.usuario = { nome: 'Luiz', logado: true }
    //req.flash('info', 'Olá mundo')
    //req.flash('error', 'ferrou')
    //req.flash('success', 'Blaaaaaa')
    console.log(req.flash('success'))
    console.log(req.session.usuario)
    res.render('index')
    next()
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
}