import React from 'react'

const FestivalsFilter = () => {
  return (
    <div className="festivals-catalog__filter-wrapper">
        <button className="festivals-catalog__filter-button">С текстом</button>
        <button className="festivals-catalog__filter-button">Наличие постановок</button>
        <select name="Тип произведения"  id="type" className="festivals-catalog__filter-select">
            <option value="Тип произведения">Тип произведения</option>
            <option value="Пьеса">Пьеса</option>
            <option value="Мьюзикл">Мьюзикл</option>
        </select>
        <select name="Год создания" id="Year" className="festivals-catalog__filter-select">
            <option value="Год создания">Год создания</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
        </select>
        <select name="Город где ставят" id="City" className="festivals-catalog__filter-select">
            <option value="Город где ставят">Город где ставят</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
        </select>
    </div>
  )
}

export default FestivalsFilter