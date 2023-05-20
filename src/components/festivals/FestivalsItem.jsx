import { Link } from 'react-router-dom'
import './festivalsCatalog.sass'


const CatalogItem = (props) => {
    return (
        <Link to={`/union/${props.id}`} className='festivals-catalog__block-item' style={{ backgroundImage: `url(${props.play.image})` }}>
            <div className="festivals-catalog__block-item-info">
                <h3 className="festivals-catalog__block-item-title">{props.play.name}</h3>
                <p className="festivals-catalog__block-item-autor">
                    <span className="festivals-catalog__block-item-type">Автор: </span>
                    {props.play.writers[0].name}
                </p>
                <p className="festivals-catalog__block-item-genre">
                    <span className="festivals-catalog__block-item-type">Тип произведения: </span>
                    {props.play.genre.name}
                </p>
                {/* <p className="festivals-catalog__block-item-additive">{festival.additive}</p> */}
            </div>
            <div className="festivals-catalog__block-item-wrapper">
                <div className="festivals-catalog__block-item-city">{props.play.writers[0].country}</div>
                <div className="festivals-catalog__block-item-text">{props.play.hasText ? 'Есть Текст' : 'Текста нет'}</div>
            </div>
        </Link>
    )


}

export default CatalogItem