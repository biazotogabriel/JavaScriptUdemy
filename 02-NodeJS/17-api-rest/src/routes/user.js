import { Router } from 'express'
import userController from '../controllers/User.js'
import loginRequired from '../middlewares/loginRequired.js'

const router = new Router()

// Não deveriam existir
// router.get('/index', loginRequired, userController.index) // lista usuários
// router.get('/show', loginRequired, userController.show) // lista um usuário

router.post('/create', userController.create)
router.put('/update', loginRequired, userController.update)
router.delete('/delete', loginRequired, userController.delete)

export default router
