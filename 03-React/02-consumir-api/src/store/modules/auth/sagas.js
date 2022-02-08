import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import axios from '../../../services/axios'
import * as actions from './actions'
import * as types from '../types'

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload)
    if (response.data?.errors?.length) throw new Error('erro')
    yield put(actions.loginSuccess({ ...response.data }))
    toast.success('Login realizado com sucesso')
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`
    payload.navigate(payload.redirect)
  } catch (error) {
    toast.error('Usuário ou senha inválidos')
    yield put(actions.loginFailure())
  }
}

function persistRehydrate({ payload }) {
  if (payload?.auth?.token)
    axios.defaults.headers.Authorization = `Bearer ${payload.auth.token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
])
