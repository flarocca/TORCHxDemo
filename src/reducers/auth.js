import { AUTH_ACTIONS } from '../constants/ACTIONS'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  buttonLabel: 'SING IN',
  errorLabel: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.TRY_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: true,
        buttonLabel: 'SIGNING IN...',
        errorLabel: null
      })
    case AUTH_ACTIONS.ERROR_ON_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: false,
        buttonLabel: 'SING IN',
        errorLabel: action.payload.message
      })
    default:
      return state
  }
}

export default auth
