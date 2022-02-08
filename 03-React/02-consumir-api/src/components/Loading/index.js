import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Conteiner } from './styled'

export default function Loading({ isLoading }) {
  const [loading, setLoading] = useState('Carregando.')

  useEffect(() => {
    if (isLoading) {
      let newLoading = ''
      setTimeout(() => {
        newLoading = `${loading}.`
        if (loading === 'Carregando...') newLoading = 'Carregando.'
        setLoading(newLoading)
      }, 600)
    }
  })

  if (!isLoading) return <div />
  return (
    <Conteiner>
      <span>{loading}</span>
      <div />
    </Conteiner>
  )
}

Loading.defaultProps = {
  isLoading: false,
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
}
