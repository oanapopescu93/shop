import React from 'react'

function ProductReviews(props){
	return <div className="product_tab">
		<div className="product_tab_box">
			{props.lang === "ro" ? <h4>Review-uri</h4> : <h4>Reviews</h4>}
			{props.lang === "ro" ? <p>Nu exista review-uri</p> : <p>No reviews</p>}
		</div>
	</div>
}

export default ProductReviews