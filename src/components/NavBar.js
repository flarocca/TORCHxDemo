import React, { Component } from 'react'
import '../css/App.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul>
          {
            this.props.children.map((item, index) => {
              return (<li key={index}>{item}</li>);
            })
          }
        </ul>
      </div>
    )
  }
}
