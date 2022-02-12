import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'

import { Form } from './styled'
import { Container } from '../../styles/GlobalStyles'
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/Loading'

/* eslint-disable-next-line no-extend-native */
Number.prototype.between = function between(min = 0, max = 0) {
  return this >= min && this <= max
}

export default function Login() {
  const navigate = useNavigate()
  function redirect(path) {
    return () => {
      navigate(path)
    }
  }
  const location = useLocation()
  const dispacth = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isLoading = useSelector((state) => state.auth.isLoading)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formErrors = []
    if (!password.length.between(6, 50))
      formErrors.push('Senha deve ter entre 6 e 50 caracteres')
    if (!isEmail(email)) formErrors.push('Email inválido')
    formErrors.forEach((element) => toast.error(element))
    if (formErrors.length) return
    const successPath = location.state?.previous || '/'
    dispacth(
      actions.loginRequest({
        email,
        password,
        redirect: redirect(successPath),
      })
    )
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Faça seu login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  )
}
