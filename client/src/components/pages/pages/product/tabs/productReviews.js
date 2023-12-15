import React from 'react'
import { translate } from '../../../../../translations/translate'

function ProductReviews(props){
	return <div className="product_tab">
		<div className="product_tab_box">
			<h4>{translate({lang: props.lang, info: "reviews"})}</h4>
			<p>{translate({lang: props.lang, info: "no_reviews"})}</p>
		</div>
	</div>
}

export default ProductReviews