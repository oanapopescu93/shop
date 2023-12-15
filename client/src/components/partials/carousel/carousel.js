import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import List from './list'

function Carousel(props){    
    const {id, options} = props

    function handleSelect(e){}

    function handleClick(e){
        if(props.handleClick && typeof props.handleClick === "function"){
            props.handleClick(e)
        }
    }

    let carouselList = <List {...props} handleClick={(e)=>handleClick(e)}></List>

    return <OwlCarousel id={id} className='owl-theme' {...options} ref={props.innerRef} onDragged={(e) => handleSelect(e)}>
        {carouselList}
    </OwlCarousel>
}

export default Carousel