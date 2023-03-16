import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SliderList from '../../partials/banners/sliderList'
import Banner from './banner'
import Categories from './category'
import About from './about'
import banner_image from '../../../img/banner_model.jpg'
import { translate } from '../../../translate'
// import { useDispatch, useSelector } from 'react-redux'
// import { addCounter, incrementCounter } from '../../../reducers/radu'

function Homepage(props){
	let lang = props.lang
	let promo_list = props.promo_list
	//let dispatch = useDispatch()
	const t = promo_list.length > 5 ? 5 : promo_list.length
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
				dots: false,
			  }
			}
		]
	}

	// const counter = useSelector(state => state.radu.counter)
	// const text = useSelector(state => state.radu.text)

	// function handleCounter(){
	// 	dispatch(incrementCounter())
	// }

	// function handleAdd(){
	// 	dispatch(addCounter())
	// }

	return <Container fluid className="container_box home_container">	
	{/* <p>{text}</p>
	<p>{counter}</p>
	<div onClick={()=>{handleCounter()}}>CLICK</div>
	<div onClick={()=>{handleAdd()}}>CLICK</div> */}
		<Banner lang={lang} img={banner_image} template="home"></Banner>
		<Categories lang={lang}></Categories>
      	<Row>
			<Col sm={12}>
				<h4>{translate({lang: props.lang, info: "promo"})}</h4>
				<SliderList lang={lang} list={promo_list} settings={settings}></SliderList>
			</Col>
        </Row>
		<About lang={lang}></About>
	</Container>
}

export default Homepage