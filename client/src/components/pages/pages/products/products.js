import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Panel from './panel'
import Sort from './sort'
import ProductList from './productList'

function Products(props) {
	return <div className="products_container">
    <Container fluid>						
      <Row>
        <Col lg={2} md={3} sm={3} className="panel_container">
          <Panel lang={props.lang} categories={props.categories}></Panel>
        </Col>
        <Col lg={10} md={9} sm={9}>
          <div className="body_container">
            <Row>
              <Col sm={12}>
                <Sort lang={props.lang}></Sort>
              </Col>
            </Row>
            <Row>
              {props.products && props.products.length>0 ? <ProductList lang={props.lang} products={props.products}></ProductList> : <Col sm={12}>
                <p>{props.lang == "ro" ? <span>Nu exista produse</span> : <span>No products</span>}</p>  
              </Col>}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
}

export default Products