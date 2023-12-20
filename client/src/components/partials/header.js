import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Settings from '../settings/settings'
import {useDispatch} from 'react-redux'
import { changePage } from '../../reducers/page'
import { translate } from '../../translations/translate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header(props){
    const {home, settings, width} = props
    let contact = home?.contact
    let email = contact && contact.email ? contact.email : {link: ""}
    let phone = contact && contact.phone ? contact.phone : {link: "", text: ""} 
    let lang = settings.lang  
    let dispatch = useDispatch()
    
    function handleClick(choice){
        dispatch(changePage(choice))
    }

	return <div className="header">
        <Container>
            <Row>
                <Col sm={4} className="header_left">
                    <Settings {...props}></Settings>
                </Col>
                <Col sm={8} className="header_right">
                    <ul>
                        <li><a href={'tel:' + phone.link}>{width > 767 ? <span>{phone.text}</span> : <FontAwesomeIcon icon={faPhone} />}</a></li>
                        <li><a href={'mailto:' + email.link}>{width > 767 ? <span>{email.link}</span> : <FontAwesomeIcon icon={faEnvelope} />}</a></li>
                        <li onClick={()=>{handleClick('About')}}><span>{translate({lang: lang, info: "about"})}</span></li> 
                        <li onClick={()=>{handleClick('Contact')}}><span>{translate({lang: lang, info: "contact"})}</span></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
}
export default Header