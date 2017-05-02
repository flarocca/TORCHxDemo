import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import '../css/App.css'

/*
        <ExploreZone />
        <AboutRealtor />
        <AboutBroker />
        <NewHomesForSale />
*/
class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Welcome />
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    isAuthenticating: state.auth.isAuthenticating,
    username: state.auth.username,
    password: state.auth.password,
  }
}

export default connect(mapStateToProps)(Home)
