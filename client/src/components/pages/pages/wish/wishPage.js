import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from '../../partials/list'
import { translate } from '../../../translate'

function WishPage(props){
    return <Container fluid className="wish_container">
          <h3>{translate({lang: props.lang, info: "wishlist"})}</h3>
          {props.wishlist && props.wishlist.length>0 ? <Row>
            <Col sm={8}>
              <List template="wishlist" lang={props.lang} list={props.wishlist}></List>
            </Col>
          </Row> : <p>{translate({lang: props.lang, info: "wishlist_empty"})}</p>}
    </Container>
}

export default WishPage