import './catalog.sass'
import { Link } from 'react-router-dom'


const CatalogItem = (props) => {
    console.log(props)
    return (
        <Link to={`/union/${props.id}`}  className='catalog__block-item' style={{ backgroundImage: `url(${props.play.image})` }}>
            <div className="catalog__block-item-info">
                <h3 className="catalog__block-item-title">{props.play.name}</h3>
                <p className="catalog__block-item-autor">
                    <span className="catalog__block-item-type">Автор: </span>
                    {props.play.writers[0].name}
                </p>
                <p className="catalog__block-item-genre">
                    <span className="catalog__block-item-type">Тип произведения: </span>
                    {props.play.genre.name}
                </p>
                {/* <p className="catalog__block-item-additive">{catalog.additive}</p> */}
            </div>
            <div className="catalog__block-item-wrapper">
                <div className="catalog__block-item-city">{props.play.writers[0].country}</div>
                <div className="catalog__block-item-text">{props.play.hasText ? 'Есть Текст' : 'Текста нет'}</div>
            </div>
        </Link>
    )
}

export default CatalogItem