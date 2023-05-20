import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './location.sass'

const Location = (props) => {
    const { id } = useParams();
    const src = `https://theatrebel.ru/api/productions/${id}`
    const [theatre, setTheatre] = useState([])
    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setTheatre(data.data.theatres)
            })
    }, [])
    return (
        <div className="union__watch">
            <h3 className="union__watch-title">Где посмотреть?</h3>
            <div className="union__watch-wrapper">
                {theatre.map((el, index) => {
                    return (
                        <div key={index} className="union__watch-block union__watch-block_up">
                            <img src={el.photo} alt="theatre" className="union__watch-photo" />
                            <span className="union__watch-span">{el.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Location