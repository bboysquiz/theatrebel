import React from 'react'
import pencil from '../../assets/pencil.svg'
import './mainscreen.sass'

const Button = () => {
  return (
    <button 
        className="mainscreen__button"
    >
        <span>Написать нам</span>
        <img src={pencil} alt="pencil" className="mainscreen__button-pencil" />
    </button>
  )
}

export default Button