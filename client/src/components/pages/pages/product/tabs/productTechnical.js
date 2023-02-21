import React from 'react'

function ProductAditionalInformation(props){
	return <div className="product_tab">
		{props.lang === "ro" ? <h4>Informatii aditionale</h4> : <h4>Aditional information</h4>}
		{props.lang === "ro" ? <p>Fara informatii</p> : <p>No information</p>}
	</div>
}

export default ProductAditionalInformation