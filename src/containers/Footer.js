import React, { Component } from 'react'
import { connect } from 'react-redux'
import LegalInfo from '../components/LegalInfo'
import CheckHomeValue from './CheckHomeValue'
import '../css/App.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <CheckHomeValue />
        <LegalInfo ownerInfo={'ADAMS, CAMERON & CO. REALTORS | | 600 S. ATLANTIC AVENUE DAYTONA BEACH, FL'} >
          <div className='legal-info-links'>
            <a id='disclaimer'>DISCLAIMER</a>
            <span>|</span>
            <a target='_blank' className='' href={'http://www.housesofdaytona.com/privacystatement.aspx'}>PRIVACY STATEMENT</a>
            <span>|</span>
            <a target='_blank' className='' href={'http://torchx.com/'}>© 2017 TORCHX</a>
          </div>
        </LegalInfo>
      </div >
    )
  }
}

let mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Footer)
