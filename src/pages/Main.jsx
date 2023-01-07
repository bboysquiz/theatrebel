import React from 'react'
import Header from '../components/header/Header'
import MainScreen from '../components/mainscreen/MainScreen'
import Categories from '../components/categories/Categories'
import Events from '../components/events/Events'


const Main = () => {
  return (
    <div>
        <Header />
        <MainScreen />
        <Categories />
        <Events />
    </div>
  )
}

export default Main