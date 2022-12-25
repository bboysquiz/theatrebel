import React from 'react'
import Button from './Button'
import MobileButton from './MobileButton'

import mainImg from '../../assets/main.png'
import './mainscreen.sass'

const MainScreen = () => {
  return (
    <div className='mainscreen'>
        <div className="mainscreen__container">
            <div className="mainscreen__info-block">
                <h1 className='mainscreen__title'>Theatrebel</h1>
                <h2 className="mainscreen__subtitle">Путеводитель в мире театра</h2>
                <p className="mainscreen__descr">Использовать строго по назначению! Мы еще допишем этот текст</p>
                <Button />
            </div>
            <div className="mainscreen__image-block">
                <img src={mainImg} alt="main" className="mainscreen__image" height={207} width={347}/>
            </div>
            <MobileButton />
        </div>
    </div>
  )
}

export default MainScreen