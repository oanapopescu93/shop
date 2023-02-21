import React from 'react'
import ProductDetails from './productDetails'

function ProductPage(props){ 
	return (
		<div className="container_box product_page_container">
      <ProductDetails lang={props.lang} socket={props.socket} product={props.product}></ProductDetails>
    </div>
	)
}

export default ProductPage