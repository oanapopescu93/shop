import React from 'react'
import Col from 'react-bootstrap/Col'
import Stars from '../../partials/stars'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { cartAdd } from '../../../reducers/cartWishlist'
import { translate } from '../../../translate'
import { changePage } from '../../../reducers/page'

function Product(props) {
  let price = props.item.price
  let discount = props.item.discount
  let price_old = 0
  if(discount>0){
    price_old = price + price * discount/100
  }
  let dispatch = useDispatch()
  
  function handleClick(name, details){
    dispatch(changePage({name, details}))
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
  
	return (        
      <Col sm={12} md={4} lg={3}>
          <div className="product">
            <div className="product_img">
              <img src={props.item.img} alt="product" onClick={()=>{handleClick('product', props.item)}}/>
              {discount > 0 ? <div className="discount">{discount}%</div> : null}
            </div>
            <div className="product_info">
              <Stars stars={props.star_array}></Stars>
              <h4 className="product_title">{props.item.title}</h4>
              <div className="product_prices">
                {price_old > 0 ? <>                  
                  <span className="product_price_old">{price_old}</span>
                  <span className="product_price_new">{price}</span>
                </> : <span className="product_price">{price}</span>}
              </div>
            </div>
            <div className="product_call_to_action">
              <Button className="shop_button" type="button" onClick={()=>{handleAddToCart(props.item)}}>{translate({lang: props.lang, info: "add_to_cart"})}</Button>        
            </div>
          </div>
      </Col>
	)
}

export default Product