import { AUTH_ACTIONS } from '../constants/ACTIONS'
import ApiService from '../services/ApiService'

export const tryLogin = () => {
  return {
    type: AUTH_ACTIONS.TRY_LOGIN
  }
}

export const loginDone = (data) => {
  return {
    type: AUTH_ACTIONS.LOGIN_DONE,
    payload: {
      data
    }
  }
}

export const errorOnLogin = (message) => {
  return {
    type: AUTH_ACTIONS.ERROR_ON_LOGIN,
    payload: {
      message
    }
  }
}

export function login(username, password) {
  return dispatch => {
    if (!username) {
      dispatch(errorOnLogin('Username required.'))
    } else if (!password) {
      dispatch(errorOnLogin('Password required.'))
    } else {
      dispatch(tryLogin())
      return ApiService.login(username, password)
        .then(json => { return json.resp })
        .then(resp => dispatch(loginDone(resp)))
        .catch(error => dispatch(errorOnLogin('Ups!!! Server is busy now, try again later.')))
    }
  }
}