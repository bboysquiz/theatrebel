import React from 'react'
import Header from '../components/header/Header'
import FestivalsCatalog from '../components/festivals/FestivalsCatalog'

const Festivals = () => {
  window.scrollTo(0, 0);
  return (
    <div>
        <Header />
        <FestivalsCatalog />
    </div>
  )
}

export default Festivals