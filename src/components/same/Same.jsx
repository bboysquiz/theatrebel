import React from 'react'
import { Link } from 'react-router-dom'

const Same = (props) => {
    return (
        <Link to={`/union/${props.id}`} className='events__block-item' style={{ backgroundImage: `url(${props.image})` }}>
            <div className="events__block-item-info">
                <h3 className="events__block-item-title">{props.name}</h3>
                <p className="events__block-item-autor">
                    <span className="events__block-item-type">Автор: </span>
                    {props.writers[0].name}
                </p>
                <p className="events__block-item-genre">
                    <span className="events__block-item-type">Тип произведения: </span>
                    {props.genre.name}
                </p>
                <p className="events__block-item-additive">{props.additive}</p>
            </div>
            <div className="events__block-item-wrapper">
                <div className="events__block-item-city">{props.writers[0].country}</div>
                <div className="events__block-item-text">{props.hasText ? 'Есть Текст' : 'Текста нет'}</div>
            </div>
        </Link>
    )

}

export default Same