import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

export default function Private({ component: Component }) {
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ previous: location.pathname }} />
  }
  return <Component />
}

Private.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func]).isRequired,
}
