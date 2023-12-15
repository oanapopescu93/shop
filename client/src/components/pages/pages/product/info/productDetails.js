import React, {useState} from 'react'
import { translate } from '../../../../../translations/translate'
import { Button } from 'react-bootstrap'
import Stars from '../../../../partials/stars'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

function ProductDetails(props){
    const {product, lang} = props
    const [customProduct, setCustomProduct] = useState(product)
	let description_short = product.description_short ? product.description_short : ""
	let discount = product.discount

    function updateProduct(item){
		let newProduct = {...customProduct}
		if(item.qty){
			newProduct.qty = item.qty
		}
		if(item.size_chosen){
			newProduct.size_chosen = item.size_chosen
		}
		if(item.color_chosen){
			newProduct.color_chosen = item.color_chosen
		}
        setCustomProduct(newProduct)
    }

    function callToAction(choice){
        if(props.handleChange && typeof props.handleChange === "function"){
            props.handleChange({choice, customProduct})
        }
    }

    return <>
        <h2>{product.title}</h2>
        <Stars stars={product.stars}></Stars>
        <Price lang={lang} item={product} currency={props.currency} rates={props.rates}></Price>
        <Quantity lang={lang} item={product} update={(e)=>{updateProduct(e)}}></Quantity>
        <Size lang={lang} item={product} update={(e)=>{updateProduct(e)}}></Size>
        <Color lang={lang} item={product} update={(e)=>{updateProduct(e)}}></Color>  
        <div className="product_description_short">
			<p>{description_short}</p>
		</div>
        <div className="shop_button_container">
            <Button className="shop_button" type="button" onClick={()=>{callToAction('cart')}}><i className="fa fa-shopping-basket" aria-hidden="true"></i> {translate({lang: props.lang, info: "add_to_cart"})}</Button>        
			<Button className="shop_button" type="button" onClick={()=>{callToAction('wishlist')}}><i className="fa fa-heart" aria-hidden="true"></i> {translate({lang: props.lang, info: "add_to_wishlist"})}</Button>        
		</div>
    </>
}

function Price(props){
	let item = props.item 
	let price = 1
	let price_old = 0
	if(item.discount>0){
	  price_old = price + price * item.discount/100
	}
  
	return <div className="product_prices">
		<div className="product_prices">
			{price_old > 0 ? <>                  
				<span className="product_price_old">{price_old}</span>
				<span className="product_price_new">{price}</span>
			</> : <span className="product_price">{price}</span>}
		</div>
		{price_old > 0 ? <div className="product_discount">
		{(() => {
			switch (props.lang) {
				case "ro":
					return <h6 className="text_red">Economisesti {item.discount}%</h6>
				case "eng":
				default:
					return <h6 className="text_red">You save {item.discount}%</h6>
			}
		})()}
		</div> : null}
	</div>
}

function Quantity(props){
    let item = props.item 
    const [qty, setQty] = useState(item.qty ? item.qty : 1)
    let x = item.qty ? item.qty : 1

    function handleChageQuantity(t){
        let payload = {...item}
        let allow = false
        if((t === 1 && qty < payload.qty_store) || (t === -1 && qty > 1)){
            allow = true  
        }
        if(allow){
            x = qty + t
            setQty(x)
            payload.qty = x
            props.update(payload)
        }
    }

    return <div className="input-group list_quantity">
        <span>{translate({lang: props.lang, info: "qty"})}:&nbsp;</span>
        <div onClick={()=>{handleChageQuantity(-1)}} type="button" className="quantity-left-minus">-</div>
        <input type="text" id="quantity" value={qty} min="1" max={item.qty_store} readOnly/>    
        <div onClick={()=>{handleChageQuantity(1)}} type="button" className="quantity-right-plus">+</div>
    </div> 
}

function Size(props){
    let item = props.item 
    let size_list = item.size
    const [size, setSize] = useState(item.size_chosen ? item.size_chosen : size_list[0])

    function change(new_size){
        let payload = {...item}
        setSize(new_size)
        payload.size_chosen = new_size
        props.update(payload)
    }

    return <>
        {size ? <div className="input-group list_size">
            <span>{translate({lang: props.lang, info: "size"})}:&nbsp;</span>
            <DropdownButton title={size} id="language_button"  className="shadow_convex" onSelect={change}>
                {size_list.map(function(item, i){
                    return <Dropdown.Item key={i} eventKey={item}><span>{item}</span></Dropdown.Item>
                })}
            </DropdownButton>
        </div> : null}
    </>
}

function Color(props){
    let item = props.item 
    let color_list = item.color
    const [color, setColor] = useState(item.color_chosen ? item.color_chosen : color_list[0])

    function change(new_color){
        let payload = {...item}
        setColor(new_color)
        payload.color_chosen = new_color
        props.update(payload)
    }

    return <>
        {color ? <div className="input-group list_color">
            <span>{translate({lang: props.lang, info: "color"})}:&nbsp;</span>
            <DropdownButton title={color} id="language_button"  className="shadow_convex" onSelect={change}>
                {color_list.map(function(item, i){
                    return <Dropdown.Item key={i} eventKey={item}><span>{item}</span></Dropdown.Item>
                })}
            </DropdownButton>
        </div> : null}
    </>
}

export default ProductDetails