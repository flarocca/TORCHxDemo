import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/App.css'
import * as actions from '../actions/login'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <input className='login-input' ref='username' type='text' placeholder={'Username'} />
        <input className='login-input' ref='password' type='password' placeholder={'Password'} />
        {this._renderLoginButton()}
        <span className='login-error-label'>{this.props.errorLabel}</span>
        <span className='login-label no-select'>{'Forgot Password?'}</span>
      </div>
    )
  }

  signIn() {
    this.props.dispatch(actions.login(this.refs.username.value, this.refs.password.value))
  }

  _renderLoginButton() {
    return (
      <button onClick={this.signIn.bind(this)} disabled={this.props.isAuthenticating} type='button' className='login-button no-select'>
        {
          this.props.isAuthenticating === true ?
            <i className='fa fa-spinner fa-pulse fa-1x fa-fw' style={{ marginRight: '3px' }} /> :
            null
        }
        <span>{this.props.buttonLabel}</span>
      </button>
    )
  }
}

let mapStateToProps = state => {
  return {
    isAuthenticating: state.auth.isAuthenticating,
    buttonLabel: state.auth.buttonLabel,
    errorLabel: state.auth.errorLabel
  }
}

export default connect(mapStateToProps)(Login)