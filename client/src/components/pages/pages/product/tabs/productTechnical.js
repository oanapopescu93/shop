import React from 'react'
import { translate } from '../../../../translate'

function ProductAditionalInformation(props){
	return <div className="product_tab">
		<h4>{translate({lang: props.lang, info: "aditional_information"})}</h4>
		<p>{translate({lang: props.lang, info: "no_information"})}</p>
	</div>
}

export default ProductAditionalInformation