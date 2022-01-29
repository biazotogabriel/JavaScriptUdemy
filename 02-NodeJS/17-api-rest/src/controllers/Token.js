import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) return res.json({ errors: ['email inválido'] })
    const macth = await bcryptjs.compare(password, user.password_hash)
    if (!macth) return res.json({ errors: ['senha inválida'] })
    const { id } = user.dataValues
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    )
    return res.json({ token })
    // console.log(macth)
  }
}

export default new TokenController()
