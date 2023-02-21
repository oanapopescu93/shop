import React from 'react'

function ProductDescription(props){
	return <div className="product_tab">
		<div className="product_tab_box">
			{props.lang === "ro" ? <h4>Descriere</h4> : <h4>Description</h4>}
			<p>{props.description}</p>
		</div>
	</div>
}

export default ProductDescription