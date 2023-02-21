import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux'
import {page} from '../../../actions/actions'
import about_img from '../../../img/banner_model.jpg'

function About(props){
    let dispatch = useDispatch()	  

    function handleClick(){
        dispatch(page({name: 'about'}))
    }

	return (
		<Row className="about_container">
            <Col sm={4}>
                {props.lang === "ro" ? <h3>Despre noi</h3> : <h3>About us</h3>}
                {props.lang === "ro" ? <p>ro.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.</p> : 
                    <p>eng.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.</p>}        
                <Button className="shop_button" type="button" onClick={handleClick}>{props.lang === "ro" ? <span>Citeste incontinuare</span> : <span>Read more</span>}</Button> 
            </Col>
            <Col sm={8}>
                <img src={about_img} alt="banner"/>
            </Col>
        </Row>
	)
}

export default About