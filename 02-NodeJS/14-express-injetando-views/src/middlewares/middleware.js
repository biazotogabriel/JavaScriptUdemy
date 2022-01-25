module.exports.middleWareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    next()
}