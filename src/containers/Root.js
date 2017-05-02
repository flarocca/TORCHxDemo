import React, { Component } from 'react'
import '../css/App.css'

class Root extends Component {
  render() {
    return (
      <div className='Root'>
        {this.props.children}
      </div>
    )
  }
}

export default Root
