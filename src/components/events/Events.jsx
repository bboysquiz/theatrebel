import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventItem from './EventItem'
import './events.sass'
import filterButton from '../../assets/filter.svg'
import EventFilter from './EventFilter'
import { Link } from 'react-router-dom'

const Events = () => {
  const src = 'https://theatrebel.ru/api/productions'
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
    <div className='events'>
      <div className="events__container">
        <h2 className="events__title">Все события</h2>
        <EventFilter />
        <img src={filterButton} alt="filter" className="events__filter-button-mobile" />
        <div className="events__block">
          {
            eventsArray.map((itemProps, index) => (
              <EventItem key={index} {...itemProps} />
            ))
          }
        </div>
        <button className="events__more-btn">Загрузить ещё</button>
      </div>
    </div>
  )
}

export default Events