import { HOME_ACTIONS } from '../constants/ACTIONS'

const initialState = {
  showLoginForm: false
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.SHOW_LOGIN:
      return Object.assign({}, state, {
        showLoginForm: !state.showLoginForm
      })
    default:
      return state
  }
}

export default home
