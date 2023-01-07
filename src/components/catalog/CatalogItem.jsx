import React from 'react'
import {catalogArray} from '../../constants/index'
import './catalog.sass'


const CatalogItem = () => {
  return (
    catalogArray.map((catalog, index) => {
        return (
            <article key={index} className='catalog__block-item' style={{ backgroundImage: `url(${catalog.img})`}}>
                <div className="catalog__block-item-info">
                    <h3 className="catalog__block-item-title">{catalog.title}</h3>
                    <p className="catalog__block-item-autor">
                        <span className="catalog__block-item-type">Автор: </span>
                        {catalog.autor}
                    </p>
                    <p className="catalog__block-item-genre">
                        <span className="catalog__block-item-type">Тип произведения: </span>
                        {catalog.type}
                    </p>
                    <p className="catalog__block-item-additive">{catalog.additive}</p>
                </div>
                <div className="catalog__block-item-wrapper">
                    <div className="catalog__block-item-city">{catalog.location}</div>
                    <div className="catalog__block-item-text">{catalog.text ? 'Есть Текст' : 'Текста нет'}</div>
                </div>
            </article>
        )
    })
  )
}

export default CatalogItem