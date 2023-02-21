import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'
import {page} from '../../../actions/actions'

function Panel(props) {
    let dispatch = useDispatch()
    const [subtotal, setSubtotal] = useState(0)  
    const [shippingValue, setShippingValue] = useState(props.shipping[0])    
    const [total, setTotal] = useState(0)    
    let lang = props.lang      
    let shipping = props.shipping ? props.shipping : []
    console.log(props.promo)

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
        dispatch(page({name: 'checkout'}))
    }

    function change(x){
        setShippingValue(x)
        setTotal(subtotal + x.price)
    }

	return <div className="cart_panel">
      {lang === "ro" ? <h4>Sumar comanda</h4> : <h4>Order summary</h4>}

      {lang === "ro" ? <p><span>Subtotal: </span><span>{subtotal}</span></p> : <p><span>Subtotal: </span><span>{subtotal}</span></p>}

      {lang === "ro" ? <p>Transport</p> : <p>Shipping</p>}
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

      {lang === "ro" ? <p>Cod promotional</p> : <p>Promo code</p>}

      {lang === "ro"? <h4><span>Total: </span><span>{total}</span></h4> : <h4><span>Total: </span><span>{total}</span></h4>}

      <Button className="shop_button" type="button" onClick={handleClick}>{lang === "ro" ? <span>Finalizeaza comanda</span> : <span>Checkout</span>}</Button>     
    </div> 
}

export default Panel