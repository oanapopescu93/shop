import React, {useState} from 'react'
import { translate } from '../../../../../translations/translate'
import { Button, Col, Row } from 'react-bootstrap'
import Stars from '../../../../partials/stars'
import Quantity from '../../../../partials/product/quantity'
import Size from '../../../../partials/product/size'
import Color from '../../../../partials/product/color'
import Price from '../../../../partials/product/price'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faHeart} from '@fortawesome/free-solid-svg-icons'

function ProductDetails(props){
    const {product, lang} = props
    const [customProduct, setCustomProduct] = useState({
        ...product,
        size_chosen: product.size[0] ? product.size[0] : null,
        color_chosen: product.color[0] ? product.color[0] : null,
        qty: 1
    })
	let description_short = product.description_short ? product.description_short : ""

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

    return <Row>
        <Col sm={12}>
            <h2>{product.title}</h2>
            <Stars stars={product.stars}></Stars>
            <Price lang={lang} item={product} currency={props.currency} rates={props.rates}></Price>
        </Col>
        <Col sm={12}>
            <Row>
                <Col sm={4}>
                    <Quantity lang={lang} item={product} update={(e)=>{updateProduct(e)}}></Quantity>
                </Col>
                <Col sm={4}>
                    <Size lang={lang} item={product} update={(e)=>{updateProduct(e)}}></Size>
                </Col>
                <Col sm={4}>
                    <Color lang={lang} item={product} update={(e)=>{updateProduct(e)}}></Color>  
                </Col>
            </Row>
        </Col>
        <Col sm={12} className="product_description_short">
            <p>{description_short}</p>
        </Col>
        <Col sm={12} className="shop_button_container">
            <Row>
                <Col sm={6}>
                    <Button className="mybutton button_fullcolor_dark" type="button" onClick={()=>{callToAction('cart')}}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        &nbsp;{translate({lang: lang, info: "add_cart"})}
                    </Button>  
                </Col>
                <Col sm={6}>                     
                    <Button className="mybutton button_fullcolor_dark" type="button" onClick={()=>{callToAction('wishlist')}}>
                        <FontAwesomeIcon icon={faHeart}/>
                        &nbsp;{translate({lang: lang, info: "add_cart"})}
                    </Button>  
                </Col>
            </Row>
        </Col>
    </Row>
}

export default ProductDetails