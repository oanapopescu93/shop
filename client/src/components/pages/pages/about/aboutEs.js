import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { translate } from '../../../../translations/translate'

function AboutDe(props){
    let name = props.name ? props.name : translate({lang: props.lang, info: "shop_name"})
    return <Row id="about" className="other_page_container">
        <Col sm={2}></Col>
        <Col sm={8}>            
            About Es
        </Col>
    </Row>
}
export default AboutDe