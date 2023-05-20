import './events.sass'
import { Link } from 'react-router-dom'

const EventItem = (props) => {
    console.log(props.id)
    return (
        <Link to={`/union/${props.id}`}  className='events__block-item' style={{ backgroundImage: `url(${props.play.image})` }}>
            <div className="events__block-item-info">
                <h3 className="events__block-item-title">{props.play.name}</h3>
                <p className="events__block-item-autor">
                    <span className="events__block-item-type">Автор: </span>
                    {props.play.writers[0].name}
                </p>
                <p className="events__block-item-genre">
                    <span className="events__block-item-type">Тип произведения: </span>
                    {props.play.genre.name}
                </p>
                {/* <p className="events__block-item-additive">{props.additive}</p> */}
            </div>
            <div className="events__block-item-wrapper">
                <div className="events__block-item-city">{props.play.writers[0].country}</div>
                <div className="events__block-item-text">{props.play.hasText ? 'Есть Текст' : 'Текста нет'}</div>
            </div>
        </Link>
    )


}

export default EventItem