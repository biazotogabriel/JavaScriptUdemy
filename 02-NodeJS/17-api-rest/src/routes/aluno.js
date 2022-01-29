import { Router } from 'express'
import alunoController from '../controllers/Aluno.js'
import loginRequired from '../middlewares/loginRequired.js'

const router = new Router()

router.get('/', loginRequired, alunoController.index)
router.get('/:id', loginRequired, alunoController.show)
router.post('/', loginRequired, alunoController.create)
router.put('/:id', loginRequired, alunoController.update)
router.delete('/:id', loginRequired, alunoController.delete)

export default router
