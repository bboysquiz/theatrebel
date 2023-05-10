import React from 'react'
import triangleImg from '../../assets/triangle.svg'
import { Link } from 'react-router-dom'
import './breadCrumbs.sass'

const BreadCrumbs = (props) => {
    return (
        <div className="union__bread-crumbs">
            <div className="union__bread-crumbs-wrapper">
                <Link to="/" className="union__bread-crumbs-prev">Главная</Link>
                <img src={triangleImg} alt="triangle bracket" className="union__bread-crumbs-triangle" />
                <Link to="../Festivals" className="union__bread-crumbs-prev">Фестивали</Link>
                <img src={triangleImg} alt="triangle bracket" className="union__bread-crumbs-triangle" />
                <Link to="../Union" className="union__bread-crumbs-current">{props.name}</Link>
            </div>
        </div>
    )
}

export default BreadCrumbs