import React from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { changePage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'
import List from './list'

function CartWishList(props){
    const {template, cart, wish, settings} = props
    let lang = settings.lang
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(changePage("Products"))
    }
    function handleCheckout(){
        dispatch(changePage("Checkout"))
    }
    return <Container id="cart_wishlist">
        {(() => {
            switch (template) {
                case "cart":
                    if(cart && cart.length > 0){
                        return <Row>
                            <Col sm={8}>
                                <List template={template} cart={cart} wish={wish} settings={settings}></List>
                            </Col>
                            <Col sm={4}>
                                <Button type="button" onClick={()=>handleBack()} className="mybutton button_transparent shadow_convex">
                                    {translate({lang: lang, info: "continue_shopping"})}
                                </Button>
                                <Button type="button" onClick={()=>handleCheckout()} className="mybutton button_transparent shadow_convex">
                                    {translate({lang: lang, info: "checkout"})}
                                </Button>
                            </Col>
                        </Row>
                    }
                    return <p>{translate({lang: lang, info: "no_cart"})}</p>       
                case "wish":
                    if(wish && wish.length > 0){
                        return <Row>
                            <Col sm={8}>
                                <List template={template} cart={cart} wish={wish} settings={settings}></List>
                            </Col>
                            <Col sm={4}>
                                <Button type="button" onClick={()=>handleBack()} className="mybutton button_transparent shadow_convex">
                                    {translate({lang: lang, info: "continue_shopping"})}
                                </Button>
                            </Col>
                        </Row>
                    }
                    return <p>{translate({lang: lang, info: "no_wishlist"})}</p>       
                default:  
                    return <p>{translate({lang: lang, info: "error"})}</p>                             
            }
        })()}
    </Container>
}
export default CartWishList