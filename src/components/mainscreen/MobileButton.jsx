import React from 'react'
import pencil from '../../assets/pencil.svg'
import './mainscreen.sass'

const MobileButton = () => {
  return (
    <button 
        className="mainscreen__button_mobile"
    >
        <span>Написать нам</span>
        <img src={pencil} alt="pencil" className="mainscreen__button_mobile-pencil" />
    </button>
  )
}

export default MobileButton