import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from '../../partials/list'
import Panel from './panel'
import Promo from './promo'

function CartPage(props){
    let lang = props.lang
    let socket = props.socket 
    let cart = props.cart 
    const [promo, setPromo] = useState(0) 

    function updatePromo(data){
      setPromo(data)
    }

    return <Container fluid className="cart_container">
          {lang === "ro" ? <h3>Cos</h3> : <h3>Cart</h3>}     
          {(() => { 
            if(cart && cart.length>0){
              return <Row>
                  <Col sm={8}>
                    <List template="cart" lang={lang} list={cart}></List>
                    <Promo lang={lang} socket={socket} updatePromo={updatePromo}></Promo>
                  </Col>
                  <Col sm={4}>
                    <Panel lang={lang} cart={cart} shipping={props.shipping} promo={promo}></Panel>
                  </Col>
                </Row>
            } else {
              if(lang === "ro"){
                return <p>Cosul este gol</p>
              } else {
                return <p>Cart is empty</p>
              }
            }
          })()}
    </Container>
}

export default CartPage