import React from 'react'
import { getStarArray } from '../../../utils'
import Stars from '../../partials/stars'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
import ProductDescription from './tabs/productDescription'
import ProductAditionalInformation from './tabs/productTechnical'
import ProductReviews from './tabs/productReviews'
import {cartAdd, wishAdd} from '../../../actions/actions'
import { useDispatch } from 'react-redux'

function ProductDetails(props){
	let lang = props.lang
	let product = props.product
	let category = product.category
	let color = product.color ? product.color : []
	let description_long = product.description_long ? product.description_long : ""
	let description_short = product.description_short ? product.description_short : ""
	let discount = product.discount
	let id = product.id
	let img = product.img
	let price = product.price
	let price_old = 0
	if(discount>0){
		price_old = price + price * discount/100
	}
	let qty = product.qty ? product.qty : 1
	let size = product.size ? product.size : []
	let stars = product.stars ? product.stars : 0
	let subcategory = product.subcategory
	let title = product.title
	let type = product.type
	let star_array = getStarArray(stars)
	let dispatch = useDispatch()	

	function addToCart(item){
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

	function addToWishlist(item){
		item.qty = 1
		item.size_chosen = null
		item.color_chosen = null
		if(item.size && item.size.length>0){
			item.size_chosen = item.size[0]
		}
		if(item.color && item.color.length>0){
			item.color_chosen = item.color[0]
		}   
		dispatch(wishAdd(item))
	}
	
	return (
		<Container fluid className="container_box product_container">						
			<Row>
				<Col lg={4} md={4} sm={6}>
					<div className="product_img">
						<img src={img} alt="product"/>
						{discount > 0 ? <div className="discount">{discount}%</div> : null}
					</div>
				</Col>
				<Col lg={8} md={8} sm={6}>
					<h2>{title}</h2>
					<Stars stars={star_array}></Stars>
					<div className="product_category_container">
						<p>
							{lang === "ro" ? <span>Categorie: </span> : <span>Category: </span>}
							{category ? <span className="tag product_type">{category}</span> : null}
							{subcategory ? <span className="tag product_type">{subcategory}</span> : null}
							{type ? <span className="tag product_type">{type}</span> : null}
						</p>
					</div>

					<div className="product_prices">
						{price_old > 0 ? <>                  
						<span className="product_price_old">{price_old}</span>
						<span className="product_price_new">{price}</span>
						</> : <span className="product_price">{price}</span>}
					</div>

					<div className="product_description_short">
						<p>{description_short}</p>
					</div>						
					
					<div className="shop_button_container">
						<Button className="shop_button" type="button" onClick={()=>{addToCart(product)}}><i class="fa fa-shopping-basket" aria-hidden="true"></i> {lang === "ro" ? <span>Adauga in cos</span> : <span>Add to cart</span>} </Button>        
						<Button className="shop_button" type="button" onClick={()=>{addToWishlist(product)}}><i class="fa fa-heart" aria-hidden="true"></i> {lang === "ro" ? <span>Add to wishlist</span> : <span>Adauga in Wishlist</span>} </Button>        
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
							<ProductDescription lang={lang} description={description_long}></ProductDescription>
						</div>
						<div className="tab-pane" id="tabs-2" role="tabpanel">
							<ProductAditionalInformation lang={lang}></ProductAditionalInformation>
						</div>
						<div className="tab-pane" id="tabs-3" role="tabpanel">
							<ProductReviews lang={lang}></ProductReviews>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductDetails