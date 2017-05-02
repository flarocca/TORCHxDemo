import React, { Component } from 'react'
import '../css/App.css'

export default class LegalInfo extends Component {
  render() {
    return (
      <div className='legal-info'>
        <label>{this.props.ownerInfo}</label>
        <span className='legal-info-disclaimer'>
          <p>
            All material herein is intended for informational purposes only
            and has been compiled from sources deemed reliable.
            Though information is believed to be correct, offering is subject
            to errors, omissions, prior sale and withdrawal without notice.
            this is not intended to solicit property already listed.
          </p>
        </span>
        {this.props.children}
      </div>
    )
  }
}
