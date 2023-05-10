import {useState, useEffect} from 'react'
import axios from 'axios'
import './catalog.sass'
import triangleImg from '../../assets/triangle.svg'
import CatalogFilter from './CatalogFilter'
import CatalogItem from './CatalogItem'
import filterButton from '../../assets/filter.svg'
import { Link } from 'react-router-dom'

const Catalog = () => {
  const src = 'https://theatrebel.ru/api/plays'
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
    <div className="catalog">
      <div className="catalog__container">
        <div className="catalog__pagination">
          <Link to="/" className="catalog__pagination-prev">Главная</Link>
          <img src={triangleImg} alt="triangle bracket" className="catalog__pagination-triangle" />
          <Link to="Composition" className="catalog__pagination-current">Произведения</Link>
        </div>
        <h1 className="catalog__title">Произведения</h1>
        <CatalogFilter />
        <img src={filterButton} alt="filter" className="events__filter-button-mobile" />
        <div className="events__block">
          {
            eventsArray.map((itemProps, index) => (
              <CatalogItem key={index} {...itemProps} />
            ))
          }
        </div>
        <button className="events__more-btn">Загрузить ещё</button>
      </div>
    </div>
  )
}

export default Catalog