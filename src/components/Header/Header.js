import React, { Component } from 'react'
import './Header.css';
import imageSrc from './profile-user.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='h-left'>Shop</div>
        <div className='h-right'>
          <div className='h-card'>Card</div>
          <div className='h-log-out'>Log Out</div>
          <img title='Profile' src={imageSrc} className='h-profile' alt='profile-user'></img>
        </div>
      </div>
    )
  }
}
