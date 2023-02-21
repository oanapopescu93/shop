import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

function About(props) {
  let lang = props.lang   
	return <Container fluid className="about">
    <Row>
      <Col sm={12}>
        {lang === "ro" ? <h3>Despre</h3> : <h3>About</h3>}    
      </Col>
         
      {lang === "ro" ? <Col sm={12}>
        <p>ro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.</p>
      </Col> : <Col sm={12}>
        <p>eng. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.</p>  
      </Col>} 
    </Row>
  </Container>
}

export default About