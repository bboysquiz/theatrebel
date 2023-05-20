import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './unionDescription.sass'
import downloadImg from '../../assets/download-icon.svg' 

const UnionDescription = () => {
    const { id } = useParams();
    const src = `https://theatrebel.ru/api/productions/${id}`
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [date, setDate] = useState('')
    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                setDescription(data.data.description)
                setTitle(data.data.play.name)
                setWriter(data.data.play.writers[0].name)
                setDate(data.data.play.date)
            })
    }, [])
    return (
        <div className="union__descr-wrapper">
            <p className="union__descr">
                {description}
            </p>
            <h2 className="union__descr-title">{title} / <span className="union__descr-title_grey">{writer}</span></h2>
            <h2 className="union__date">{date}</h2>
            <span className="union__date-descr">Дата первого издания*</span>
            <button className="union__download-button download-text">
                <img src={downloadImg} alt="download" className="union__download-icon" />
                <span className="union__download-span">Скачать текст произведения</span>
            </button>
        </div>
    )
}

export default UnionDescription