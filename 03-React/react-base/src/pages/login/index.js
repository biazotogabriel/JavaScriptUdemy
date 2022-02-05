import React from 'react'
import { useDispatch } from 'react-redux'
import { Tittle, Paragraph } from './styled'
import { Container } from '../../styles/GlobalStyles'
import * as exampleActions from '../../store/modules/example/actions'

export default function Login() {
  const dispatch = useDispatch()
  function handleClick(e) {
    e.preventDefault()
    dispatch(exampleActions.clicaBotaoRequest())
  }
  return (
    <Container>
      <Tittle isRed={false}>
        página de <small>login</small>
      </Tittle>
      <Paragraph>
        lore <a href="/#">Teste</a>
      </Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  )
}
