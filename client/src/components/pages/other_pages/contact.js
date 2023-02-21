import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function Contact(props) {
  let lang = props.lang  
	 
  return <Container fluid className="contact">
    <Row>
      <Col sm={12}>
        {lang === "ro" ? <h3>Contact</h3> : <h3>Contact</h3>}    
      </Col>
    </Row>
  </Container>
}

export default Contact