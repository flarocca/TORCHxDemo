import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/App.css'

/*

*/
class Welcome extends Component {
  render() {
    return (
      <div className='welcome'>
        <div className='video-container'>
          <video autoPlay="true" loop poster="https://s3.amazonaws.com/demetriuslwilliamson/DBScreenshot" id='welcome-video'>
            <source src="https://s3.amazonaws.com/demetriuslwilliamson/demetriuswilliamson.mp4" type="video/mp4" />
            <source src="https://s3.amazonaws.com/demetriuslwilliamson/demetriuswilliamson.webm" type="video/webm" />
          </video>
        </div>
        <div className='welcome-search'>
          <div className='container'>
            <label>{'DAYTONA BEACH AREA REAL ESTATE'}</label>
            <label>{'WELCOME TO WHERE HOME BEGINS'}</label>
            <input className='' ref='email' type='text' placeholder={'Email'} />
            <button type='button' className=''>
              <span>{'GO'}</span>
            </button>
          </div>
        </div>
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

export default connect(mapStateToProps)(Welcome)
