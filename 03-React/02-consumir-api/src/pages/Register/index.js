import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as actions from '../../store/modules/auth/actions'

import { Form } from './styled'
import { Container } from '../../styles/GlobalStyles'
import Loading from '../../components/Loading'

export default function Register() {
  const navigate = useNavigate()
  function redirect(path) {
    return () => {
      navigate(path)
    }
  }
  const id = useSelector((state) => state.auth.user.id)
  const nomeStored = useSelector((state) => state.auth.user.nome)
  const emailStored = useSelector((state) => state.auth.user.email)
  const isLoading = useSelector((state) => state.auth.user.isLoading)
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (!id) return
    setNome(nomeStored)
    setEmail(emailStored)
  }, [])

  // const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    const formErrors = []
    if (nome.length < 3 || nome.length > 255)
      formErrors.push('Nome deve ter entre 3 e 255 caracteres')
    if (!id && (password.length < 6 || password.length > 50))
      formErrors.push('Senha deve ter entre 6 e 50 caracteres')
    if (!isEmail(email)) formErrors.push('Email inválido')
    formErrors.forEach((element) => toast.error(element))
    if (formErrors.length > 0) return
    const successPath = '/'
    dispatch(
      actions.registerRequest({
        nome,
        email,
        password,
        id,
        redirect: redirect(successPath),
      })
    )
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>
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
        <button type="submit">{id ? 'Salvar' : 'Crie sua conta'}</button>
      </Form>
    </Container>
  )
}
