import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Checkout(props) {
    let lang = props.lang   
	return <Container fluid className="checkout_container">
        <Row>
            <Col sm={12}>
                {lang === "ro" ? <h3>Finalizare comanda</h3> : <h3>Checkout</h3>}   
            </Col>
        </Row> 
    </Container> 
}

export default Checkout