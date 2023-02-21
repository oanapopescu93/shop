import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Homepage(props){
	let lang = props.lang

	return <Container fluid className="home_container">						
      	<Row>
        	<Col sm={12}>
				{lang === "ro" ? <h3>Acasa</h3> : <h3>Home</h3>} 
		  	</Col>
			<Row>
                <Col sm={12}>
				</Col>
            </Row>  
        </Row>
	</Container>
}

export default Homepage