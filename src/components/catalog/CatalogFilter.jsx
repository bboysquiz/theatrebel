import React, {useState} from 'react'
import triangleImg from '../../assets/triangleFilter.svg'
import crossImg from '../../assets/cross.svg'

const CatalogFilter = () => {
  const [type, setType] = useState('Тип произведения')
  const [typeActive, setTypeActive] = useState('')
  const [typeActiveTriangle, setTypeActiveTriangle] = useState('')
  const [typeChoosedActive, setTypeChoosedActive] = useState('')
  const [year, setYear] = useState('Год создания')
  const [yearActive, setYearActive] = useState('')
  const [yearActiveTriangle, setYearActiveTriangle] = useState('')
  const [yearChoosedActive, setYearChoosedActive] = useState('')
  const [city, setCity] = useState('Город где ставят')
  const [cityActive, setCityActive] = useState('')
  const [cityActiveTriangle, setCityActiveTriangle] = useState('')
  const [cityChoosedActive, setCityChoosedActive] = useState('')
  const [activeButtonText, setActiveButtonText] = useState('')
  const [activeButtonPerformance, setActiveButtonPerformance] = useState('')
  const [activeButtonTextBG, setActiveButtonTextBG] = useState('')
  const [activeButtonPerformanceBG, setActiveButtonPerformanceBG] = useState('')
  const [choosedFilterType, setChoosedFilterType] = useState('')
  const [choosedFilterYear, setChoosedFilterYear] = useState('')
  const [choosedFilterCity, setChoosedFilterCity] = useState('')

  const chooseType = (type) => {
    setType(type)
    toggleType()
    setChoosedFilterType('choosed')
  }
  const toggleType = () => {
    if (typeActive === 'active') {
      setTypeActiveTriangle('triangle_closed')
      setTypeActive('closed')
      setTypeChoosedActive('disabled')
    } else {
      setTypeActiveTriangle('triangle_active')
      setTypeActive('active')
      setTypeChoosedActive('enabled')
    }
  }

  const chooseYear = (year) => {
    setYear(year)
    toggleYear()
    setChoosedFilterYear('choosed')
  }
  const toggleYear = () => {
    if (yearActive === 'active') {
      setYearActiveTriangle('triangle_closed')
      setYearActive('closed')
      setYearChoosedActive('disabled')
    } else {
      setYearActiveTriangle('triangle_active')
      setYearActive('active')
      setYearChoosedActive('enabled')
    }
  }

  const chooseCity = (city) => {
    setCity(city)
    toggleCity()
    setChoosedFilterCity('choosed')
  }
  const toggleCity = () => {
    if (cityActive === 'active') {
      setCityActiveTriangle('triangle_closed')
      setCityActive('closed')
      setCityChoosedActive('disabled')
    } else {
      setCityActiveTriangle('triangle_active')
      setCityActive('active')
      setCityChoosedActive('enabled')
    }
  }
  const filter = (filter) => {
    if (filter === 'text') {
      if (activeButtonText === '') {
        setActiveButtonText('button_active')
        setActiveButtonTextBG('button_active-bg-text')
      }else{
        setActiveButtonText('')
        setActiveButtonTextBG('')
      }
    } else if (filter === 'performance') {
      if (activeButtonPerformance === '') {
        setActiveButtonPerformance('button_active')
        setActiveButtonPerformanceBG('button_active-bg-performance')
      }else{
        setActiveButtonPerformance('')
        setActiveButtonPerformanceBG('')
      }
      
    }
  }
  return (
    <div className="catalog__filter-wrapper">
        <button className={`catalog__filter-button filter-button-text ${activeButtonTextBG}`} onClick={() => filter('text')}>С текстом <img src={crossImg} alt="cross" className={`catalog__filter-button-cross ${activeButtonText}`} /></button>
        <button className={`catalog__filter-button filter-button-performance ${activeButtonPerformanceBG}`} onClick={() => filter('performance')}>Наличие постановок <img src={crossImg} alt="cross" className={`catalog__filter-button-cross ${activeButtonPerformance}`} /></button>

        <div id="type" className={`catalog__filter-select events__filter-select-type filter-button-novel ${choosedFilterType} ${typeChoosedActive}`}>
          <div className={`catalog__filter-select-type-choosed`} onClick={toggleType}>{type} <img src={triangleImg} alt="triangle" className={`catalog__filter-triangle ${typeActiveTriangle}`} /></div>
            <ul className={`catalog__filter-ul-type ${typeActive}`}>
              <li className="catalog__filter-li" onClick={() => chooseType('Пьеса')}>Пьеса</li>
              <li className="catalog__filter-li" onClick={() => chooseType('Мьюзикл')}>Мьюзикл</li>
              <li className="catalog__filter-li" onClick={() => chooseType('Опера')}>Опера</li>
              <li className="catalog__filter-li" onClick={() => chooseType('Спектакль')}>Спектакль</li>
            </ul>
        </div>

        <div id="Year" className={`catalog__filter-select events__filter-select-year filter-button-year ${choosedFilterYear} ${yearChoosedActive}`}>
          <div className="catalog__filter-select-year-choosed" onClick={toggleYear}>{year} <img src={triangleImg} alt="triangle" className={`catalog__filter-triangle ${yearActiveTriangle}`} /></div>
          <ul className={`catalog__filter-ul-year ${yearActive}`}>
            <li className="catalog__filter-li" onClick={() => chooseYear('2022')}>2022</li>
            <li className="catalog__filter-li" onClick={() => chooseYear('2021')}>2021</li>
            <li className="catalog__filter-li" onClick={() => chooseYear('2020')}>2020</li>
            <li className="catalog__filter-li" onClick={() => chooseYear('2019')}>2019</li>
            <li className="catalog__filter-li" onClick={() => chooseYear('2018')}>2018</li>
          </ul>
        </div>
        <div id="City" className={`catalog__filter-select events__filter-select-city filter-button-city ${choosedFilterCity} ${cityChoosedActive}`}>
          <div className="catalog__filter-select-city-choosed" onClick={toggleCity}>{city} <img src={triangleImg} alt="triangle" className={`catalog__filter-triangle ${cityActiveTriangle}`} /></div>
          <ul className={`catalog__filter-ul-city ${cityActive}`}>
            <li className="catalog__filter-li" onClick={() => chooseCity('Москва')}>Москва</li>
            <li className="catalog__filter-li" onClick={() => chooseCity('Санкт-Петербург')}>Санкт-Петербург</li>
          </ul>
        </div>
    </div>
  )
}

export default CatalogFilter