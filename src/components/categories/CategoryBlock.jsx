import React from 'react'
import { categoriesArray } from '../../constants'

const CategoryBlock = () => {
  return (
    categoriesArray.map((category, index) => {
        return(
            <article key={index} className="categories__block-item">
              <img 
                src={category.img} 
                alt={category.alt} 
                className="categories__block-img" 
                width={272}
              />
              <div className="categories__block-info">
                <h3 className='categories__block-title'>{category.title}</h3>
                <h4 className="categories__block-subtitle">{category.subtitle}</h4>
                <p className="categories__block-descr">{category.description}</p>
                <p className="categories__block-link">{category.link}</p>
                <p className="categories__block-access">{category.access}</p>
                <p className="categories__block-addInfo">{category.addInfo}</p>
              </div>
            </article>
        )
    })     
  )
}

export default CategoryBlock