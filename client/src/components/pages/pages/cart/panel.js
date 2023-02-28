import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'
import { translate } from '../../../translate'
import { changePage } from '../../../reducers/page'

function Panel(props) {
    let dispatch = useDispatch()
    const [subtotal, setSubtotal] = useState(0)  
    const [shippingValue, setShippingValue] = useState(props.shipping[0])    
    const [total, setTotal] = useState(0)
    let shipping = props.shipping ? props.shipping : []

    useEffect(() => {
		let cart = props.cart 
        let sum = 0
        for(let i in cart){
            sum = sum + cart[i].price * cart[i].qty
        }
        setSubtotal(sum)
        setTotal(sum + shippingValue.price)
	}, [props.cart])

    function handleClick(){
        dispatch(changePage({name: 'checkout'}))
    }

    function change(x){
        setShippingValue(x)
        setTotal(subtotal + x.price)
    }

	return <div className="cart_panel">
        <h4>{translate({lang: props.lang, info: "order_summary"})}</h4>
        <p><span>{translate({lang: props.lang, info: "subtotal"})}: </span><span>{subtotal}</span></p>
        <p>{translate({lang: props.lang, info: "shipping"})}</p>
            <div className="dropdown">
                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{shippingValue.name} ({shippingValue.price})</span>
                </button>
                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                    {shipping.map(function(x, i){
                        return <li key={i} onClick={()=>{change(x)}}><span>{x.name} ({x.price})</span></li>
                    })}
                </ul>
            </div>
        <p>{translate({lang: props.lang, info: "promo_code"})}</p>
        <h4><span>{translate({lang: props.lang, info: "total"})}: </span><span>{total}</span></h4>
        <Button className="shop_button" type="button" onClick={handleClick}><span>{translate({lang: props.lang, info: "checkout"})}</span></Button>     
    </div> 
}

export default Panel