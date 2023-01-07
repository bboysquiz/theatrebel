import React from 'react'
import EventItem from './EventItem'
import './events.sass'
import filterButton from '../../assets/filter.svg'
import EventFilter from './EventFilter'

const Events = () => {
  return (
    <div className='events'>
        <div className="events__container">
            <h2 className="events__title">Все события</h2>
            <EventFilter />
            <img src={filterButton} alt="filter" className="events__filter-button-mobile" />
            <div className="events__block">
                <EventItem />
            </div>
            <button className="events__more-btn">Загрузить ещё</button>
        </div>
    </div>
  )
}

export default Events