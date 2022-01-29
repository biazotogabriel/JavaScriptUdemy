import User from '../models/User.js'

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create({
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
      })
      const { id, nome, email } = novoUser
      return res.json({ id, nome, email })
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) })
    }
  }

  async index(req, res) {
    try {
      // console.log(req.userId, req.userEmail)
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] })
      return res.json(users)
    } catch (error) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId, { attributes: ['id', 'nome', 'email'] })
      return res.json(user)
    } catch (error) {
      return res.json(null)
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId)
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] })
      const novoUser = await user.update(req.body)
      const { id, nome, email } = novoUser
      return res.json({ id, nome, email })
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) })
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId)
      if (!user) return res.status(400).json({ errors: ['Usuário não existe'] })
      await user.destroy()
      return res.json(null)
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) })
    }
  }
}

export default new UserController()
