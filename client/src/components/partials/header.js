import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Header(props){
    const {home, settings} = props
    let lang = settings.lang
    let contact = home.contact
    let email = contact.email
    let phone = contact.phone

	return <div className="header">
        <Container>
            <Row>
                <Col sm={6} className="header_left">
                    <ul>
                        <li><a href={'tel:' + phone.link}>{phone.text}</a></li>
                        <li><a href={'mailto:' + email.link}>{email.link}</a></li>
                    </ul>
                </Col>
                <Col sm={6} className="header_right">
                    {(() => {
                        switch (lang) {
                            case "DE":
                                return <p>Free shipping on total of 100 or more</p>
                            case "ES":
                                return <p>Free shipping on total of 100 or more</p>
                            case "FR":
                                return <p>Free shipping on total of 100 or more</p>
                            case "IT":
                                return <p>Free shipping on total of 100 or more</p>
                            case "RO":
                                return <p>Free shipping on total of 100 or more</p>
                            case "ENG":
                            default:
                                return <p>Free shipping on total of 100 or more</p>
                        } 
                    })()}
                </Col>
            </Row>
        </Container>
    </div>
}
export default Header