import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { get } from 'lodash'
import { useNavigate } from 'react-router-dom'
import axios from '../../services/axios'

import { Form } from './styled'
import { Container } from '../../styles/GlobalStyles'
import Loading from '../../components/Loading'

export default function Register() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    const formErrors = []
    if (nome.length < 3 || nome.length > 255)
      formErrors.push('Nome deve ter entre 3 e 255 caracteres')
    if (password.length < 6 || password.length > 50)
      formErrors.push('Senha deve ter entre 6 e 50 caracteres')
    if (!isEmail(email)) formErrors.push('Email inválido')
    formErrors.forEach((element) => toast.error(element))
    if (formErrors.length > 0) return
    setIsLoading(true)
    try {
      await axios.post('/users/create', {
        nome,
        email,
        password,
      })
      toast.dismiss()
      toast.success('Cadastro realizado com sucesso')
      setIsLoading(false)
      navigate('/login')
    } catch (error) {
      const errors = get(error, 'response.data.errors', [])
      errors.forEach((element) => toast.error(element))
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Crie sua conta</h1>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            placeholder="seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            value={email}
            placeholder="seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            placeholder="sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Criar Conta</button>
      </Form>
    </Container>
  )
}
