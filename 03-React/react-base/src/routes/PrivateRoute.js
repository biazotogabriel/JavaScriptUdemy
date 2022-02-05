import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function PrivateRoute({ isClosed, ...rest }) {
  const isLoggedIn = false
  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={rest.location.pathname} />
  }
  return <Outlet />
}

PrivateRoute.defaultProps = {
  isClosed: false,
}

PrivateRoute.propTypes = {
  isClosed: PropTypes.bool,
}
