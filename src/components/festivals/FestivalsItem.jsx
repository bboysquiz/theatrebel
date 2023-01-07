import React from 'react'
import {festivalsArray} from '../../constants/index'
import './festivalsCatalog.sass'


const CatalogItem = () => {
  return (
    festivalsArray.map((festival, index) => {
        return (
            <article key={index} className='festivals-catalog__block-item' style={{ backgroundImage: `url(${festival.img})`}}>
                <div className="festivals-catalog__block-item-info">
                    <h3 className="festivals-catalog__block-item-title">{festival.title}</h3>
                    <p className="festivals-catalog__block-item-autor">
                        <span className="festivals-catalog__block-item-type">Автор: </span>
                        {festival.autor}
                    </p>
                    <p className="festivals-catalog__block-item-genre">
                        <span className="festivals-catalog__block-item-type">Тип произведения: </span>
                        {festival.type}
                    </p>
                    <p className="festivals-catalog__block-item-additive">{festival.additive}</p>
                </div>
                <div className="festivals-catalog__block-item-wrapper">
                    <div className="festivals-catalog__block-item-city">{festival.location}</div>
                    <div className="festivals-catalog__block-item-text">{festival.text ? 'Есть Текст' : 'Текста нет'}</div>
                </div>
            </article>
        )
    })
  )
}

export default CatalogItem