import React from 'react'
import './actors.sass'

const Actors = (props) => {
  return (
    <div className="union__actors-wrapper">
        <h3 className="union__actors-title">Актеры</h3>
        <img src={props.image} alt="actor" className="union__actors-photo union__actors-photo-1" />
        <img src={props.image} alt="actor" className="union__actors-photo union__actors-photo-2" />
        <img src={props.image} alt="actor" className="union__actors-photo union__actors-photo-3" />
        <img src={props.image} alt="actor" className="union__actors-photo union__actors-photo-4" />
    </div>
  )
}

export default Actors