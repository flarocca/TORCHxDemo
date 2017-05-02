export class HOME_ACTIONS {
  static get SHOW_LOGIN() { return 'HOME_ACTIONS_SHOW_LOGIN'; }
}

export class AUTH_ACTIONS {
  static get INVALID_USERNAME() { return 'AUTH_ACTIONS_INVALID_USERNAME'; }
  static get INVALID_PASSWORD() { return 'AUTH_ACTIONS_INVALID_PASSWORD'; }
  static get TRY_LOGIN() { return 'AUTH_ACTIONS_TRY_LOGIN'; }
  static get ERROR_ON_LOGIN() { return 'AUTH_ACTIONS_ERROR_ON_LOGIN'; }
  static get LOGIN_DONE() { return 'AUTH_ACTIONS_LOGIN_DONE' }
}