import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Private from './Private'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Aluno from '../pages/Aluno'
import Alunos from '../pages/Alunos'
import Fotos from '../pages/Fotos'
import Page404 from '../pages/Page404'

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Alunos />} />
      <Route
        exact
        path="/aluno/:id/edit"
        element={<Private component={Aluno} />}
      />
      <Route exact path="/aluno/" element={<Private component={Aluno} />} />
      <Route exact path="/foto/:id" element={<Private component={Fotos} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
