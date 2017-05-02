import React, { Component } from 'react'
import '../css/App.css'

export default class CheckHomeValue extends Component {
  render() {
    return (
      <div className='check-home-value'>
        <label>{'CHECK YOUR HOME VALUE'}</label>
        <input className='check-home-value-input' ref='address' type='text' placeholder={'Address'} />
        <input className='check-home-value-input' ref='email' type='text' placeholder={'Email'} />
        <button type='button' className='check-home-value-btn'>
          <span>{'GO'}</span>
        </button>
      </div>
    )
  }
}
