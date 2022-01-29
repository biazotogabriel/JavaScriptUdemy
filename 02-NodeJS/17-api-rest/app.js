import dotenv from 'dotenv'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url))

dotenv.config()

import './src/database/index.js'

import express from 'express'
import homeRoutes from './src/routes/home.js'
import userRoutes from './src/routes/user.js'
import tokenRoutes from './src/routes/token.js'
import alunoRoutes from './src/routes/aluno.js'
import photoRoutes from './src/routes/photo.js'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(resolve(dir, 'uploads')))
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/users', userRoutes)
    this.app.use('/tokens', tokenRoutes)
    this.app.use('/alunos', alunoRoutes)
    this.app.use('/photos', photoRoutes)
  }
}

export default new App().app
