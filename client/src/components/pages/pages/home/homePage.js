import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SliderList from '../../partials/banners/sliderList'
import Banner from './banner'
import Categories from './category'
import About from './about'
import banner_image from '../../../img/banner_model.jpg'

function Homepage(props){
	let lang = props.lang
	let promo_list = props.promo_list

	return <Container fluid className="container_box home_container">	
		<Banner lang={lang} img={banner_image} template="home"></Banner>
		<Categories lang={lang}></Categories>
      	<Row>
			<Col sm={12}>
				{props.lang === "ro" ? <h4>Promo</h4> : <h4>Promo</h4>}
				<SliderList lang={lang} list={promo_list}></SliderList>
			</Col>
        </Row>
		<About lang={lang}></About>
	</Container>
}

export default Homepage