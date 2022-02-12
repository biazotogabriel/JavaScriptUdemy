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
    payload.redirect()
  } catch (error) {
    toast.error('Usuário ou senha inválidos')
    yield put(actions.loginFailure())
  }
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload
  try {
    if (id) {
      yield call(axios.put, '/users/update', {
        email,
        nome,
        password: password || undefined,
      })
      yield put(actions.registerUpdatedSuccess(payload))
      toast.success('Conta alterada com sucesso')
    } else {
      yield call(axios.post, '/users/create', {
        email,
        nome,
        password,
      })
      yield put(actions.registerCreatedSuccess(payload))
      toast.success('Conta criada com sucesso')
      payload.redirect()
    }
  } catch (e) {
    const errors = e?.response?.data?.errors || []
    // const status = e?.response?.status || 0
    if (errors.length) {
      errors.forEach((element) => toast.error(element))
    } else {
      toast.error(e.message) // 'Erro desconhecido'
    }
    yield put(actions.registerFailure())
  }
}

function persistRehydrate({ payload }) {
  if (payload?.auth?.token)
    axios.defaults.headers.Authorization = `Bearer ${payload.auth.token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
])
