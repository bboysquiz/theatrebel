import React from 'react'
import './location.sass'

const Location = (props) => {
    return (
        <div className="union__watch">
            <h3 className="union__watch-title">Где посмотреть?</h3>
            <div className="union__watch-wrapper">
                <div className="union__watch-block union__watch-block_up">
                    <img src={props.image} alt="theatre" className="union__watch-photo" />
                    <span className="union__watch-span">МДТ</span>
                </div>
                <div className="union__watch-block union__watch-block_down">
                    <span className="union__watch-span">Театр на Таганке</span>
                    <img src={props.image} alt="thetre" className="union__watch-photo" />
                </div>
            </div>
        </div>
    )
}

export default Location