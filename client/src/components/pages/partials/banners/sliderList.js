import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux'
import { changePage } from '../../../reducers/page';

function SliderList(props){
  let dispatch = useDispatch()
  const list = props.list
  let slides = [...Array(list.length).keys()]
  const settings = props.settings ? props.settings : {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false,
          }
        }
    ]
  }
  
  function handleClick(name, details){
    dispatch(changePage({name, details}))
  }

	return (
		<div className="slider_container">
      <Slider {...settings}>
        {slides.map(function(i){
          return <div className="customSlide" key={i}>
          <h3 onClick={()=>{handleClick('product', list[i])}}>{list[i].title}</h3>
          <img src={list[i].img} alt="CustomSlide" onClick={()=>{handleClick('product', list[i])}}/>
        </div>
        })}
      </Slider>
		</div>
	)
}

export default SliderList