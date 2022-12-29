import React from 'react'
import {eventsArray} from '../../constants/index'
import './events.sass'


const EventItem = () => {
  return (
    eventsArray.map((event, index) => {
        return (
            <article key={index} className='events__block-item' style={{ backgroundImage: `url(${event.img})`}}>
                <div className="events__block-item-info">
                    <h3 className="events__block-item-title">{event.title}</h3>
                    <p className="events__block-item-autor">
                        <span className="events__block-item-type">Автор: </span>
                        {event.autor}
                    </p>
                    <p className="events__block-item-genre">
                        <span className="events__block-item-type">Тип произведения: </span>
                        {event.type}
                    </p>
                    <p className="events__block-item-additive">{event.additive}</p>
                </div>
                <div className="events__block-item-wrapper">
                    <div className="events__block-item-city">{event.location}</div>
                    <div className="events__block-item-text">{event.text ? 'Есть Текст' : 'Текста нет'}</div>
                </div>
            </article>
        )
    })
  )
}

export default EventItem