import './catalog.sass'
import { Link } from 'react-router-dom'


const CatalogItem = (catalog) => {
    console.log(catalog)
    return (
        <Link to={`/union/${catalog.id}`}  className='catalog__block-item' style={{ backgroundImage: `url(${catalog.image})` }}>
            <div className="catalog__block-item-info">
                <h3 className="catalog__block-item-title">{catalog.name}</h3>
                <p className="catalog__block-item-autor">
                    <span className="catalog__block-item-type">Автор: </span>
                    {catalog.writers !== undefined ? catalog.writers[0].name : ''}
                </p>
                <p className="catalog__block-item-genre">
                    <span className="catalog__block-item-type">Тип произведения: </span>
                    {catalog.genre !== undefined ? catalog.genre.name : ''}
                </p>
                <p className="catalog__block-item-additive">{catalog.additive}</p>
            </div>
            <div className="catalog__block-item-wrapper">
                <div className="catalog__block-item-city">{catalog.writers[0].country}</div>
                <div className="catalog__block-item-text">{catalog.hasText ? 'Есть Текст' : 'Текста нет'}</div>
            </div>
        </Link>
    )
}

export default CatalogItem