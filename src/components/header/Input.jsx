import React, {useState} from 'react'
import Lens from '../../assets/IconSearch.svg'

const Input = () => {
    const [toggle, setToggle] = useState('search_closed')
    const [toggleLens, setToggleLens] = useState('lens_right')
    const [toggleAnimation, setToggleAnimation] = useState('')
    const [toggleLensAnimation, setToggleLensAnimation] = useState('')

    function openSearch () {
        console.log('toogle')
        if (window.innerWidth <= 430){
            if (toggle === "search_closed") {
                document.getElementById('header-input').style.display = "flex"
                setToggleAnimation("search_opened-animation")
                setToggleLensAnimation("lens_left-animation")
                setTimeout(() => {
                    setToggle("search_opened")
                    setToggleLens("lens_left")
                    document.getElementById('header-input').focus()
                }, 670)
    
            }
        }
        
    }
    function closeSearch () {
        if (window.innerWidth <= 430){
            if (toggle === "search_opened") {
                setToggleAnimation("search_closed-animation")
                setToggleLensAnimation("lens_right-animation")
                setTimeout(() => {
                    setToggle("search_closed")
                    setToggleLens("lens_right")
                    document.getElementById('header-input').style.display = "none"
                }, 670)
            }
        }
    }
  return (
    <div className='header__search-block' onClick={openSearch} >
        <input 
            type="text" 
            className={`header__search-input ${toggle} ${toggleAnimation}`} 
            placeholder='Я ищу'
            id='header-input'
            onBlur={closeSearch}
        />
        <img 
            src={Lens} 
            alt="lens" 
            id='header-lens' 
            className={`header__search-lens ${toggleLens} ${toggleLensAnimation}`} 
            width={17} 
            height={16}
        />
    </div>
  )
}

export default Input