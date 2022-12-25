import React from 'react'
import CategoryBlock from './CategoryBlock'
import './categories.sass'


const Categories = () => {
  return (
    <div className='categories'>
        <div className="categories__container">
            <h2 className="categories__title">Ищи информацию</h2>
            <p className="categories__descr">
                Карточка может содержать в себе стили любого уровня вложенност, кроме самого верхнего
            </p>
            <div className='categories__block'>
              <CategoryBlock />
            </div>
        </div>
    </div>
  )
}

export default Categories