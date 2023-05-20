import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './director.sass'

const Director = () => {
    const { id } = useParams();
    const src = `https://theatrebel.ru/api/productions/${id}`
    const [director, setDitrector] = useState('')
    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setDitrector(data.data.directors[0])
            })
    }, [])
    return (
        <div className="union__director">
            <img src={director.photo} alt="" className="union__director-photo" width={173} height={173}/>
            <div className="union__director-wrapper">
                <h3 className="union__director-name">{director.name} / <span className="union__director-name-span">Режисер</span></h3>
                <p className="union__director-descr">
                    {director.info} 
                </p>
            </div>
        </div>
    )
}

export default Director