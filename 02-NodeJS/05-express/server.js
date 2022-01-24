const express = require('express')
const app = express()
// CRUD = create, read, update, delete
//        post  , get , put   , delete
// http://meusite.com/ <= GET => entrega a página /
// http://meusite.com/sobre <= GET => entrega a página /sobre

app.get('/', (req, res) => {
    console.log(req)
    res.send('hello world!')
})

app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
    console.log('servidor na porta 3000')
    console.log('Acessar http://localhost:3000')
})