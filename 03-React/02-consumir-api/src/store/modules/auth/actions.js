import * as types from '../types'

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  }
}

export function loginSuccess({ user, token }) {
  return {
    type: types.LOGIN_SUCCESS,
    user,
    token,
  }
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  }
}
