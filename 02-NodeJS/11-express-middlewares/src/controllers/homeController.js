exports.paginaInicial = (req, res, next) => {
    res.render('index')
    //console.log(`Pagina Inicial: Olha oque tem na req.session.nome ${req.session.nome}`)
    next()
}

exports.trataPost = (req, res, next) => {
    res.send(req.body)
}