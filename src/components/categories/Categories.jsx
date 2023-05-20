import React from 'react'
import CategoryBlock from './CategoryBlock'
import './categories.sass'
import LensImg from '../../assets/lens.svg'


const Categories = () => {
  return (
    <div className='categories'>
        <div className="categories__container">
            <h2 className="categories__title">Ищи информацию</h2>
            <p className="categories__descr">
                Найди себя в мире театра
            </p>
            <div className='categories__block'>
              <CategoryBlock />
              <div className="categories__block-search">
                <h3 className='categories__block-title'>Начать поиск</h3>
                <p className="categories__block-descr">Более 10 различных фильтров и сортировок, о вау!</p>
                <button className="categories__block-btn">Искать <img src={LensImg} alt="lens" className="categories__lens-icon" /></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Categories