import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Login from './Login'
import '../css/App.css'
import * as actions from '../actions/home'

//`/users/${user.id}`
class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavBar>
          <Link to={"/"} className='navbar-li no-select'>{"HOME"}</Link>
          <Link to={"/"} className='navbar-li no-select'>{"REVIEWS"}</Link>
          <Link to={"/"} className='navbar-li no-select'>{"ABOUT DEMETRIUS"}</Link>
          <Link to={"/"} className='navbar-li no-select'>{"SOLD LISTINGS"}</Link>
        </NavBar>
        <span className='navbar-btn-container'>
          <span onClick={this.callMeClicked} className='navbar-btn no-select'>{"666-999-1234"}</span>
          <span onClick={this.showLoginForm.bind(this)} className='navbar-btn no-select'>{"LOGIN"}</span>
        </span>
        {
          this.props.showLoginForm ?
            <Login /> :
            null
        }
      </div>
    )
  }

  callMeClicked() {

  }

  showLoginForm() {
    this.props.dispatch(actions.showLogin())
  }
}

let mapStateToProps = state => {
  return {
    showLoginForm: state.home.showLoginForm
  }
}

export default connect(mapStateToProps)(Header)
