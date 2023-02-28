import React from 'react'
import { translate } from '../../../../translate'

function ProductDescription(props){
	return <div className="product_tab">
		<div className="product_tab_box">
			<h4>{translate({lang: props.lang, info: "description"})}</h4>
			<p>{props.description}</p>
		</div>
	</div>
}

export default ProductDescription