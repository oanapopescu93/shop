import React from 'react'
import Col from 'react-bootstrap/Col'
import Stars from '../../partials/stars'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { cartAdd, page } from '../../../actions/actions'

function Product(props) {
  let lang = props.lang
  let title = props.item.title
  let price = props.item.price
  let discount = props.item.discount
  let img = props.item.img
  let price_old = 0
  if(discount>0){
    price_old = price + price * discount/100
  }
  let dispatch = useDispatch()
  
  function handleClick(name, details){
    dispatch(page({name, details}))
  }

  function handleAddToCart(item){
    item.qty = 1
    item.size_chosen = null
    item.color_chosen = null
    if(item.size && item.size.length>0){
      item.size_chosen = item.size[0]
    }
    if(item.color && item.color.length>0){
      item.color_chosen = item.color[0]
    }    
    dispatch(cartAdd(item))
  }
  
	return (        
      <Col sm={12} md={4} lg={3}>
          <div className="product">
            <div className="product_img">
              <img src={img} alt="product" onClick={()=>{handleClick('product', props.item)}}/>
              {discount > 0 ? <div className="discount">{discount}%</div> : null}
            </div>
            <div className="product_info">
              <Stars stars={props.star_array}></Stars>
              <h4 className="product_title">{title}</h4>
              <div className="product_prices">
                {price_old > 0 ? <>                  
                  <span className="product_price_old">{price_old}</span>
                  <span className="product_price_new">{price}</span>
                </> : <span className="product_price">{price}</span>}
              </div>
            </div>
            <div className="product_call_to_action">
              <Button className="shop_button" type="button" onClick={()=>{handleAddToCart(props.item)}}>{lang === "ro" ? <span>Adauga in cos</span> : <span>Add to cart</span>} </Button>        
            </div>
          </div>
      </Col>
	)
}

export default Product