import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux'
import { page } from '../../../actions/actions'

function CustomSlide(props){
  let dispatch = useDispatch()
  function handleClick(name, details){
    dispatch(page({name, details}))
  }
  return (
    <div className="customSlide" key={props.index}>
      <h3 onClick={()=>{handleClick('product', props.elem)}}>{props.elem.title}</h3>
      <img src={props.elem.img} alt="CustomSlide" onClick={()=>{handleClick('product', props.elem)}}/>
    </div>
  )
}

function SliderList(props){
  const list = props.list
  let slides = [...Array(list.length).keys()]
  const t = list.length > 5 ? 5 : list.length
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: t,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  }

	return (
		<div className="slider_container">
      <Slider {...settings}>
        {slides.map(function(i){
          return <CustomSlide index={i} lang={props.lang} elem={list[i]}></CustomSlide>
        })}
      </Slider>
		</div>
	)
}

export default SliderList