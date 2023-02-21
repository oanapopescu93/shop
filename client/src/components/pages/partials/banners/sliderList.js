import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomSlide(props){
  const index = props.index
  const title = props.elem.title
  const img = props.elem.img
  return (
    <div className="customSlide" key={index}>
      <h3>{title}</h3>
      <img src={img} alt="CustomSlide" />
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