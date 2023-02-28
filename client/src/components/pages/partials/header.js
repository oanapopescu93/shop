import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../reducers/page'
import { translate } from '../../translate'

function Header(props){	
  console.log(props)
  let dispatch = useDispatch()
  let cart = useSelector(state => state.cartWishlist.cart)
  let cart_qty = 0
  for(let i in cart){
    cart_qty = cart_qty + cart[i].qty
  }

  function handleClick(x){
    dispatch(changePage({name: x}))
  }

	return (
		<div className="header_container">
      <div className="header">
        <nav>
          <h1 className="header_title" onClick={()=>{handleClick('home')}}>Logo</h1>
          <ul className="header_list_left">
          <li onClick={()=>{handleClick('about')}}>{translate({lang: props.lang, info: "about"})}</li>
          <li onClick={()=>{handleClick('contact')}}>{translate({lang: props.lang, info: "contact"})}</li>
          </ul>
          <ul className="header_list_right">
            <li id="header_sign" onClick={()=>{handleClick('sign')}}><i className="fa fa-user" aria-hidden="true"></i></li>
            <li id="header_wish" onClick={()=>{handleClick('wish')}}><i className="fa fa-heart" aria-hidden="true"></i></li>
            <li id="header_cart" onClick={()=>{handleClick('cart')}}><i className="fa fa-shopping-cart" aria-hidden="true"></i>{cart_qty>0 ? <span id="cart_count">{cart_qty}</span> : null}</li>
          </ul>
        </nav>
      </div>
		</div>
	)
}

export default Header