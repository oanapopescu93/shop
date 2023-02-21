import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from '../../partials/list'

function WishPage(props){
    let lang = props.lang
    let wishlist = props.wishlist

    return <Container fluid className="wish_container">
          {lang === "ro" ? <h3>Lista de dorinte</h3> : <h3>Wishlist</h3>}     
          {(() => { 
            if(wishlist && wishlist.length>0){
              return <Row>
                  <Col sm={8}>
                    <List template="wishlist" lang={lang} list={wishlist}></List>
                  </Col>
                </Row>
            } else {
              if(lang === "ro"){
                return <p>Lista este gol</p>
              } else {
                return <p>The list is empty</p>
              }
            }
          })()}
    </Container>
}

export default WishPage