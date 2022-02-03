import React from 'react'
import { Tittle, Paragraph } from './styled'
import { Container } from '../../styles/GlobalStyles'

export default function Login() {
  return (
    <Container>
      <Tittle isRed={false}>
        página de <small>login</small>
      </Tittle>
      <Paragraph>
        lore <a href="/#">Teste</a> m
      </Paragraph>
      <button type="button">Enviar</button>
    </Container>
  )
}
