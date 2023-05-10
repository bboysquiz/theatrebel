import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs'
import Actors from '../components/actors/Actors'
import Location from '../components/location/Location'
import Header from '../components/header/Header'
import Director from '../components/director/Director'
import UnionDescription from '../components/unionDescription/UnionDescription'
import Same from '../components/same/Same'
import axios from 'axios'
import downloadImg from '../assets/download-icon.svg'
import './union.sass'

const Union = () => {
    const srcSame = 'https://theatrebel.ru/api/plays'
    const [sameArray, setSameArray] = useState([])
    useEffect(() => {
        axios
            .get(srcSame)
            .then(data => {
                setSameArray(data.data.content)
            })
    }, [])
    const { id } = useParams();
    const src = `https://theatrebel.ru/api/plays/${id}`
    const [unionData, setUnionData] = useState([])
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [photo, setPhoto] = useState('')
    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setUnionData(data.data)
                setTitle(data.data.name)
                setWriter(data.data.writers[0].name)
                setPhoto(data.data.image)
            })
    }, [])
    console.log(unionData)
    return (
        <div>
            <Header />
            <div className="union">
                <div className="union__container">
                    <BreadCrumbs {...unionData} />
                    <div className="union__wrapper">
                        <h2 className="union__title">{title} / <span className="union__title-span">{writer}</span></h2>
                        <img src={photo} alt="main-photo" className="union__photo" />
                        <Director {...unionData} />
                        <Actors {...unionData} />
                        <Location {...unionData} />
                        <button className="union__download-button download-scenario">
                            <img src={downloadImg} alt="download" className="union__download-icon" />
                            <span className="union__download-span">Скачать сценарий</span>
                        </button>
                    </div>
                    <UnionDescription />

                    <div className="union__same-wrapper">
                        <h3 className="union__same-title">Похожие произведения</h3>
                        <div className="same__block">
                            {
                                sameArray.map((itemProps, index) => (
                                    <Same key={index} {...itemProps} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Union