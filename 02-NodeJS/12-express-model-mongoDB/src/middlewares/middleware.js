module.exports.middleWareGlobal = (req, res, next) => {
    if(req.body.cliente) {
        console.log('vi que você postou')
    }
    next()
}