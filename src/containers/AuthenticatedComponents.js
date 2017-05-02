import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class AuthenticatedComponents extends Component {
  render() {
    return (
      <div>
        {
          this.props.isAuthenticated === true
            ? this.props.children
            : <Redirect to='/login' />
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AuthenticatedComponents)
