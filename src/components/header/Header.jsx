import React from 'react'
import './header.sass'
import Input from './Input'

const Header = () => {
  
  return (
    <div className='header'>
      <div className="header__container">
        <div className="header__logo">
          <img src="" alt="LOGO" className="header__logo" />
        </div>
        <Input />
      </div>
    </div>
  )
}

export default Header