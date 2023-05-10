import { Link } from 'react-router-dom'
import './festivalsCatalog.sass'


const CatalogItem = (festival) => {
    return (
        <Link to={`/union/${festival.id}`} className='festivals-catalog__block-item' style={{ backgroundImage: `url(${festival.image})` }}>
            <div className="festivals-catalog__block-item-info">
                <h3 className="festivals-catalog__block-item-title">{festival.name}</h3>
                <p className="festivals-catalog__block-item-autor">
                    <span className="festivals-catalog__block-item-type">Автор: </span>
                    {festival.writers[0].name}
                </p>
                <p className="festivals-catalog__block-item-genre">
                    <span className="festivals-catalog__block-item-type">Тип произведения: </span>
                    {festival.genre.name}
                </p>
                <p className="festivals-catalog__block-item-additive">{festival.additive}</p>
            </div>
            <div className="festivals-catalog__block-item-wrapper">
                <div className="festivals-catalog__block-item-city">{festival.writers[0].country}</div>
                <div className="festivals-catalog__block-item-text">{festival.text ? 'Есть Текст' : 'Текста нет'}</div>
            </div>
        </Link>
    )


}

export default CatalogItem