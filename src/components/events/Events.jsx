import React from 'react'
import EventItem from './EventItem'
import './events.sass'
import filterButton from '../../assets/filter.svg'

const Events = () => {
  return (
    <div className='events'>
        <div className="events__container">
            <h2 className="events__title">Все события</h2>
            <div className="events__filter-wrapper">
                <button className="events__filter-button">С текстом</button>
                <button className="events__filter-button">Наличие постановок</button>
                <select name="Тип произведения"  id="type" className="events__filter-select">
                    <option value="Тип произведения">Тип произведения</option>
                    <option value="Пьеса">Пьеса</option>
                    <option value="Мьюзикл">Мьюзикл</option>
                </select>
                <select name="Год создания" id="Year" className="events__filter-select">
                    <option value="Год создания">Год создания</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
                <select name="Город где ставят" id="City" className="events__filter-select">
                    <option value="Город где ставят">Город где ставят</option>
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                </select>
            </div>
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