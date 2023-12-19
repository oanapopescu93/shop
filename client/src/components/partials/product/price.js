import React from 'react'

function Price(props){
    let item = props.item 
	let price = 1
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

export default Price