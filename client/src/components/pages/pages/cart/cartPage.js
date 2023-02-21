import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from '../../partials/list'
import Panel from './panel'
import Promo from './promo'
import { translate } from '../../../translate'

function CartPage(props){
    const [promo, setPromo] = useState(0) 

    function updatePromo(data){
      setPromo(data)
    }

    return <Container fluid className="container_box cart_container">
          <h3>{translate({lang: props.lang, info: "cart"})}</h3> 
          {(() => { 
            if(props.cart && props.cart.length>0){
              return <Row>
                  <Col sm={8}>
                    <List template="cart" lang={props.lang} list={props.cart}></List>
                    <Promo lang={props.lang} socket={props.socket} updatePromo={updatePromo}></Promo>
                  </Col>
                  <Col sm={4}>
                    <Panel lang={props.lang} cart={props.cart} shipping={props.shipping} promo={promo}></Panel>
                  </Col>
                </Row>
            } else {
              return <p>{translate({lang: props.lang, info: "cart_empty"})}</p>
            }
          })()}
    </Container>
}

export default CartPage