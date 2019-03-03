import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './header.css'

const Header = () => (
  <div className='header'>
    <Link to='/'>
      <img src={logo} alt="logo" className='header-logo' />
    </Link>
  </div>
)

export default Header
