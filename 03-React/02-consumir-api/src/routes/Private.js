import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Private({ component: Component }) {
  const isLoggedIn = false
  if (!isLoggedIn) {
    return <Navigate to="/login" /> // state={rest.location.pathname}
  }
  return <Component />
}

Private.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func]).isRequired,
}
