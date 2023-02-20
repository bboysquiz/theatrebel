import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { eventsArray } from '../../constants/index'
import './events.sass'


const EventItem = () => {
    const src = 'http://45.129.2.204:8081/api/plays'
    const [eventsArray, setEventsArray] = useState([])
    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setEventsArray(data.data.content)
            })
    }, [])
    console.log(eventsArray)
    return (
        eventsArray.map((event, index) => {
            return (
                <article key={index} className='events__block-item' style={{ backgroundImage: `url(${event.img})` }}>
                    <div className="events__block-item-info">
                        <h3 className="events__block-item-title">{event.name}</h3>
                        <p className="events__block-item-autor">
                            <span className="events__block-item-type">Автор: </span>
                            {event.writers[0].name}
                        </p>
                        <p className="events__block-item-genre">
                            <span className="events__block-item-type">Тип произведения: </span>
                            {event.type}
                        </p>
                        <p className="events__block-item-additive">{event.additive}</p>
                    </div>
                    <div className="events__block-item-wrapper">
                        <div className="events__block-item-city">{event.location}</div>
                        <div className="events__block-item-text">{event.hasText ? 'Есть Текст' : 'Текста нет'}</div>
                    </div>
                </article>
            )
        })
    )
}

export default EventItem