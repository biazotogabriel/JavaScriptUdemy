import Aluno from '../models/Aluno.js'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Biazoto',
      email: 'biazotogabriel@gmail.com',
      idade: 22,
      peso: 80,
      altura: 1.8,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()
