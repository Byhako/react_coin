import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import logo from './logo.png'
import './header.css'

const Header = () => (
  <div className='header'>
    <Link to='/'>
      <img src={logo} alt='logo' className='header-logo' />
    </Link>

    <Search />
  </div>
)

export default Header
