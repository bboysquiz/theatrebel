import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './actors.sass'

const Actors = (props) => {
  const { id } = useParams();
  const src = `https://theatrebel.ru/api/productions/${id}`
  const [actor, setActor] = useState([])
  useEffect(() => {
    axios
      .get(src)
      .then(data => {
        setActor(data.data.actors)
      })
  }, [])


  return (
    <div className="union__actors-wrapper">
      <h3 className="union__actors-title">Актеры</h3>
      {actor.map((el, index) => {
        return (
          <img src={el.photo} key={index} alt="actor" className={`union__actors-photo union__actors-photo-${index + 1}`} />
        )
      })}
    </div>
  )
}

export default Actors