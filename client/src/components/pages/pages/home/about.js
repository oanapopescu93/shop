import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch } from 'react-redux'
import {page} from '../../../actions/actions'
import about_img from '../../../img/banner_model.jpg'
import { translate } from '../../../translate'

function About(props){
    let dispatch = useDispatch()  

    function handleClick(){
        dispatch(page({name: 'about'}))
    }

	return (
		<Row className="about_container">
            <Col sm={4}>                
                <h3>{translate({lang: props.lang, info: "about_us"})}</h3>
                {(() => {
                    switch (props.lang) {
                        case "ro":
                            return <p>ro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.</p>
                        case "eng":
                        default:
                            return <p>eng. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.</p>  					
                    }
                })()}
                <Button className="shop_button" type="button" onClick={handleClick}>{translate({lang: props.lang, info: "read_more"})}</Button> 
            </Col>
            <Col sm={8}>
                <img src={about_img} alt="banner"/>
            </Col>
        </Row>
	)
}

export default About