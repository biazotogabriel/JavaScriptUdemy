const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    console.log(req.session.user)
    if (req.session.user) {
        const contatos = await Contato.buscaContatos(req.session.user._id)    
        return res.render('index', { contatos })
    }
    res.render('index', { contatos: null }) 
}