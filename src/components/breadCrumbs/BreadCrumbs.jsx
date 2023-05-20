import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import triangleImg from '../../assets/triangle.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './breadCrumbs.sass'

const BreadCrumbs = () => {
    const { id } = useParams();
    const src = `https://theatrebel.ru/api/productions/${id}`
    const [title, setTitle] = useState('')
    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setTitle(data.data.play.name)
            })
    }, [])
    return (
        <div className="union__bread-crumbs">
            <div className="union__bread-crumbs-wrapper">
                <Link to="/" className="union__bread-crumbs-prev">Главная</Link>
                <img src={triangleImg} alt="triangle bracket" className="union__bread-crumbs-triangle" />
                <Link to="../Festivals" className="union__bread-crumbs-prev">Фестивали</Link>
                <img src={triangleImg} alt="triangle bracket" className="union__bread-crumbs-triangle" />
                <Link to="../Union" className="union__bread-crumbs-current">{title}</Link>
            </div>
        </div>
    )
}

export default BreadCrumbs