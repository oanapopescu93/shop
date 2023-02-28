import React, {useState} from 'react'
import { getStarArray } from '../../../utils'
import Stars from '../../partials/stars'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
import ProductDescription from './tabs/productDescription'
import ProductAditionalInformation from './tabs/productTechnical'
import ProductReviews from './tabs/productReviews'
import { useDispatch } from 'react-redux'
import { translate } from '../../../translate'
import { cartAdd, cartUpdate, wishAdd } from '../../../reducers/cartWishlist'

function Quantity(props){
    let item = props.item 
    const [qty, setQty] = useState(item.qty ? item.qty : 1)
    let x = item.qty ? item.qty : 1

    function increment(){
        let payload = {...item}
        if(qty < payload.qty_store){
            x = qty + 1
            setQty(x)
            payload.qty = x
            props.update(payload)
        }
    }
    function decrement(){
        let payload = {...item}
        if(qty > 1){
            x = qty - 1
            setQty(x)
            payload.qty = x
            props.update(item)
        }
    }

    return <div className="input-group list_quantity">
        <span>{translate({lang: props.lang, info: "qty"})}:&nbsp;</span>
        <div onClick={()=>{decrement()}} type="button" className="quantity-left-minus">-</div>
        <input type="text" id="quantity" value={qty} min="1" max={item.qty_store}/>    
        <div onClick={()=>{increment()}} type="button" className="quantity-right-plus">+</div>
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
            <div className="dropdown">
                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {size}
                </button>
                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                    {size_list.map(function(x, i){
                        return <li key={i} onClick={()=>{change(x)}}><span>{x}</span></li>
                    })}
                </ul>
            </div>
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
            <div className="dropdown">
                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {color}
                </button>
                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                    {color_list.map(function(x, i){
                        return <li key={i} onClick={()=>{change(x)}}><span>{x}</span></li>
                    })}
                </ul>
            </div>
        </div> : null}
    </>
}

function Price(props){
	let item = props.item 
	let qty = item.qty ? item.qty : 1
	let price = item.price * qty
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

function ProductDetails(props){
	const [product, setProduct] = useState(props.product)
	let description_long = product.description_long ? product.description_long : ""
	let description_short = product.description_short ? product.description_short : ""
	let discount = product.discount
	let stars = product.stars ? product.stars : 0
	let star_array = getStarArray(stars)
	let dispatch = useDispatch()	

	function addToCart(){
		let payload = {...product}		
		if(!payload.qty){
			payload.qty = 1
		}
		if(!payload.size_chosen){
			payload.size_chosen = payload.size[0]
		}
		if(!payload.color_chosen){
			payload.color_chosen = payload.color[0]
		}
		dispatch(cartAdd(payload))
	}

	function addToWishlist(){
		let payload = {...product}		
		payload.qty = 1
		if(!payload.size_chosen){
			payload.size_chosen = payload.size[0]
		}
		if(!payload.color_chosen){
			payload.color_chosen = payload.color[0]
		} 
		dispatch(wishAdd(payload))
	}

	function updateProduct(item){
		let newProduct = {...product}
		if(item.qty){
			newProduct.qty = item.qty
		}
		if(item.size_chosen){
			newProduct.size_chosen = item.size_chosen
		}
		if(item.color_chosen){
			newProduct.color_chosen = item.color_chosen
		}
        setProduct(newProduct)
    }
	
	return (
		<Container fluid className="container_box product_container">						
			<Row>
				<Col lg={4} md={4} sm={6}>
					<div className="product_img">
						<img src={product.img} alt="product"/>
						{discount > 0 ? <div className="discount">{discount}%</div> : null}
					</div>
				</Col>
				<Col lg={8} md={8} sm={6}>
					<h2>{product.title}</h2>
					<Stars stars={star_array}></Stars>
					<div className="product_category_container">
						<p>
							<span>{translate({lang: props.lang, info: "category"})}Categorie: </span>
							{product.category ? <span className="tag product_type">{product.category}</span> : null}
							{product.subcategory ? <span className="tag product_type">{product.subcategory}</span> : null}
							{product.type ? <span className="tag product_type">{product.type}</span> : null}
						</p>
					</div>

					<Price lang={props.lang} item={props.product}></Price>
					<Quantity lang={props.lang} item={props.product} update={(e)=>{updateProduct(e)}}></Quantity>
                    <Size lang={props.lang} item={props.product} update={(e)=>{updateProduct(e)}}></Size>
                    <Color lang={props.lang} item={props.product} update={(e)=>{updateProduct(e)}}></Color>  

					<div className="product_description_short">
						<p>{description_short}</p>
					</div>						
					
					<div className="shop_button_container">
						<Button className="shop_button" type="button" onClick={()=>{addToCart(product)}}><i className="fa fa-shopping-basket" aria-hidden="true"></i> {translate({lang: props.lang, info: "add_to_cart"})}</Button>        
						<Button className="shop_button" type="button" onClick={()=>{addToWishlist(product)}}><i className="fa fa-heart" aria-hidden="true"></i> {translate({lang: props.lang, info: "add_to_wishlist"})}</Button>        
					</div>
				</Col>
			</Row>
			<Row>
				<Col sm={12} className="product_more_info">
					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item">
							<a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">First Panel</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Second Panel</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Third Panel</a>
						</li>
					</ul>
					<div className="tab-content">
						<div className="tab-pane active" id="tabs-1" role="tabpanel">
							<ProductDescription lang={props.lang} description={description_long}></ProductDescription>
						</div>
						<div className="tab-pane" id="tabs-2" role="tabpanel">
							<ProductAditionalInformation lang={props.lang}></ProductAditionalInformation>
						</div>
						<div className="tab-pane" id="tabs-3" role="tabpanel">
							<ProductReviews lang={props.lang}></ProductReviews>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductDetails