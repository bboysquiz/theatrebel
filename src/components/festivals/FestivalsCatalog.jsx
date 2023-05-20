import { useState, useEffect } from 'react'
import axios from 'axios'
import './festivalsCatalog.sass'
import triangleImg from '../../assets/triangle.svg'
import FestivalsFilter from './FestivalsFilter'
import FestivalsItem from './FestivalsItem'
import filterButton from '../../assets/filter.svg'
import { Link } from 'react-router-dom'

const FestivalsCatalog = () => {
  const src = 'https://theatrebel.ru/api/productions'
  const [festivalsArray, setFestivalsArray] = useState([])
  useEffect(() => {
    axios
      .get(src)
      .then(data => {
        setFestivalsArray(data.data.content)
      })
  }, [])
  console.log(festivalsArray)
  return (
    <div className="festivals-catalog">
      <div className="festivals-catalog__container">
        <div className="festivals-catalog__pagination">
          <Link to="/" className="festivals-catalog__pagination-prev">Главная</Link>
          <img src={triangleImg} alt="triangle bracket" className="festivals-catalog__pagination-triangle" />
          <Link to="Festivals" className="festivals-catalog__pagination-current">Фестивали</Link>
        </div>
        <h1 className="festivals-catalog__title">Фестивали</h1>
        <FestivalsFilter />
        <img src={filterButton} alt="filter" className="events__filter-button-mobile" />
        <div className="events__block">
          {
            festivalsArray.map((itemProps, index) => (
              <FestivalsItem key={index} {...itemProps} />
            ))
          }
        </div>
        <button className="events__more-btn">Загрузить ещё</button>
      </div>
    </div>
  )
}

export default FestivalsCatalog