import * as types from '../types'

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...initialState }
      newState.isLoading = true
      return newState
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state }
      newState.isLoggedIn = true
      newState.token = action.token
      newState.user = action.user
      newState.isLoading = false
      return newState
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState }
      return newState
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }
    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state }
      newState.user.nome = action.payload.nome
      newState.user.email = action.payload.email
      newState.isLoading = false
      return newState
    }
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state }
      newState.isLoading = false
      return newState
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...state }
      newState.isLoading = false
      return newState
    }

    default:
      return state
  }
}
