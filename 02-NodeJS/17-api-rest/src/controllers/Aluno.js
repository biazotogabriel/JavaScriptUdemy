import Aluno from '../models/Aluno.js'
import Photo from '../models/Photo.js'

class AlunoController {
  async index(req, res) {
    try {
      const aluno = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['id', 'originalname', 'filename', 'url'],
          order: [['id', 'DESC']],
        },
      })
      res.json(aluno)
    } catch (error) {
      res.json(null)
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findOne({
        attributes: ['id', 'nome', 'sobrenome'],
        where: { id: req.params.id },
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['id', 'originalname', 'filename', 'url'],
          order: [['id', 'DESC']],
        },
      })
      if (!aluno) throw new EvalError(`aluno ${req.params.id} não encontrado`)
      return res.json(aluno)
    } catch (error) {
      return res.json({ error: [error.message] })
    }
  }

  async create(req, res) {
    try {
      const novoAluno = await Aluno.create(
        {
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          email: req.body.email,
          idade: req.body.idade,
          peso: req.body.peso,
          altura: req.body.altura,
          created_at: new Date(),
          updated_at: new Date(),
        },
      )
      const { id, nome, email } = novoAluno
      return res.json({ id, nome, email })
    } catch (error) {
      return res.json({ error: [error.message] })
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id)
      if (!aluno) throw new Error('Aluno não identificado')
      const novoAluno = await aluno.update(req.body)
      const { id, nome, sobrenome } = novoAluno
      return res.json({ id, nome, sobrenome })
    } catch (error) {
      return res.json({ error: [error.message] })
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id)
      if (!aluno) throw new Error('Aluno não identificado')
      await aluno.destroy()
      return res.json({ message: `aluno ${req.params.id} deletado` })
    } catch (error) {
      return res.json({ error: [error.message] })
    }
  }
}

export default new AlunoController()
