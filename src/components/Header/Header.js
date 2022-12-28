import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';  
import imageSrc from './profile-user.png';
import { auth } from '../../FireBase';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to='/main/shop'>
            <div className='h-left'>Shop</div>
        </Link>
        <div className='h-right'>
          <Link to='/main/card'>
            <div className='h-card'>Card</div>
          </Link>

          <Link to='/' onClick={() => {auth.signOut()}}>
            <div className='h-log-out'>Log Out</div>
          </Link>

          <Link to='/userprofile'>
            <img title='Profile' src={imageSrc} className='h-profile' alt='profile-user'></img>
          </Link>
        </div>
      </div>
    )
  }
}
