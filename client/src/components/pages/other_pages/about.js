import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { translate } from '../../translate'

function About(props) {
	return <Container fluid className="about">
    <Row>
      <Col sm={12}>
        <h3>{translate({lang: props.lang, info: "about"})}</h3>    
      </Col>

      {(() => {
          switch (props.lang) {
              case "ro":
                  return <p>ro. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.</p>
              case "eng":
              default:
                  return <p>eng. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed. Vivamus vitae faucibus orci. Nunc ullamcorper purus id neque interdum interdum. Cras lobortis mattis fringilla. Cras rhoncus lobortis ligula, ac euismod orci malesuada facilisis. Donec metus est, tincidunt at enim non, sagittis accumsan sapien. Sed vitae porta lorem. Cras luctus tristique augue, quis molestie nulla aliquam vel. Donec at tincidunt nunc. Nam molestie erat purus, eu porttitor elit rutrum a. Fusce et placerat magna. Aenean accumsan blandit imperdiet. Mauris consequat elementum nibh, at dignissim eros pharetra vitae.</p>  					
          }
      })()}
    </Row>
  </Container>
}

export default About