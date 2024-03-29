import React from 'react'
import { Button, Col } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import Stars from '../../../partials/stars'
import { translate } from '../../../../translations/translate'
import { changePage, changeSelectedProduct } from '../../../../reducers/page'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { cartAdd } from '../../../../reducers/cartWishlist'

function Cell(props) {
    const {item, lang} = props
    let price = props.item.price
    let discount = props.item.discount
    let price_old = 0
    if(discount>0){
        price_old = price + price * discount/100
    }
    let dispatch = useDispatch()

    function handleClick(name, id){
        dispatch(changePage('Product'))
        dispatch(changeSelectedProduct(id))
    }
    
    function handleAddToCart(item){
        let payload = {...item}
        payload.qty = 1
        payload.size_chosen = null
        payload.color_chosen = null
        if(payload.size && payload.size.length>0){
            payload.size_chosen = payload.size[0]
        }
        if(payload.color && payload.color.length>0){
            payload.color_chosen = payload.color[0]
        } 		
        dispatch(cartAdd(payload))
    }    

    return <Col sm={12} md={4} lg={3}>
    <div className="product">
      <div className="product_img">
        <img src={item.url} alt="product" onClick={()=>{handleClick('product', item.id)}}/>
        {discount > 0 ? <div className="discount">{discount}%</div> : null}
      </div>
      <div className="product_info">        
        <h4 className="product_title">{item.title}</h4>
        <Stars score={item.stars}></Stars>
        <div className="product_prices">
          {price_old > 0 ? <>                  
            <span className="product_price_old">{price_old}</span>
            <span className="product_price_new">{price}</span>
          </> : <span className="product_price">{price}</span>}
        </div>
      </div>
      <div className="product_call_to_action">
        <Button className="mybutton button_fullcolor_dark" type="button" onClick={()=>{handleAddToCart(item)}}>
          <FontAwesomeIcon icon={faCartShopping} onClick={()=>handleClick('Cart')} />
          &nbsp;{translate({lang: lang, info: "add_cart"})}
        </Button>        
      </div>
    </div>
</Col>
}

export default Cell