const fs = require('fs').promises

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }) //flag a faz append no arquivo, flag w sobrescreve o conteudo
}