const express = require('express')
const app = express()

// query strings
// /profiles/12345?campanha=googleads&nomeCamapanha=seila
app.get('/', (req, res) => {
    res.send('<form action="/" method="post">Nome do cliente: <input type="text" name="nome"><button>Enviar</button></form>')
})

app.post('/', (req, res) => {
    console.log(req)
    res.send('Formulário enviado')
})

// PARAMS DE URL
app.get('/reqParams/:idUsuarios?', (req, res) => {
    console.log(req.params)
    //    req.params -> pega os parametros da url separados por "/". ":" após a barra define se é um parâmetro e "?" define como opcional
    // /reqParams/123 -> req.params.idUsuarios = 123
    res.send(req.params.idUsuarios)
})

// QUERY STRINGS DE URL
app.get('/queryStrings/', (req, res) => {
    //    req.query -> pega os query strings da url. A partir do ponto de interrogação "?" a url envia chave e valor para a query conforme abaixo. para mandar mais de uma chave=valor basta separar por &
    // .../queryStrings/?nome=gabriel&sobrenome=biazoto
    // req.query = {"nome":"gabriel","sobrenome":"biazoto"}
    // req.query.nome = gabriel
    res.send(req.query.nome)
})


app.get('/header', (req, res) => {
    res.send('<form action="/header/" method="post">Nome do cliente: <input type="text" name="nome"><button>Enviar</button></form>')
})
// BODY precisa ser post e precisa da função logo abaixo para permitir tratar o req.body
app.use(express.urlencoded({ extended: true }))

app.post('/header/', (req, res) => {
    //    req.body -> pega os itens enviados na requisição
    // Ao clicar no botão do formulário...
    // req.body = {"nome":"Gabriel"}
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('servidor na porta 3000')
})