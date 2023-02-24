import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { translate } from '../../translate'

function Contact(props) {	 
  return <Container fluid className="contact">
    <Row>
      <Col sm={12}>
        <h3>{translate({lang: props.lang, info: "contact"})}</h3>    
      </Col>
    </Row>
  </Container>
}

export default Contact