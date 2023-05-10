import React from 'react'
import './director.sass'

const Director = (props) => {
    return (
        <div className="union__director">
            <img src={props.image} alt="" className="union__director-photo"/>
            <div className="union__director-wrapper">
                <h3 className="union__director-name">Лев Додин / <span className="union__director-name-span">Режисер</span></h3>
                <p className="union__director-descr">
                    Лев Додин родился 14 мая 1944
                    года в Сталинске (ныне
                    Новокузнецк), где его родители
                    находились в эвакуации. В 1945
                    году семья вернулась в Ленинград.
                </p>
            </div>
        </div>
    )
}

export default Director