exports.middleWareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404') //geralmente se renderiza uma página 404
    }
}

exports.csrfMiddleware = (req, res, next) => {
    console.log(req.csrfToken())
    res.locals.csrfToken = req.csrfToken()
    next()

}