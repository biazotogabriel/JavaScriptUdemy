import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Login from '../pages/Login'
import Page404 from '../pages/Page404'

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/login" element={<PrivateRoute />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
