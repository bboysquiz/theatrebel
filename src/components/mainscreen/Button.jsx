import React from 'react'
import pencil from '../../assets/pencil.svg'
import './mainscreen.sass'

const Button = () => {
  return (
    <button 
        className="mainscreen__button"
    >
        Написать нам
        <img src={pencil} alt="pencil" className="mainscreen__button-pencil" />
    </button>
  )
}

export default Button