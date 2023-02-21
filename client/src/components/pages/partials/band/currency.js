import React, {useState} from 'react'
import { getCookie } from '../../../utils'

function Currency(props){	
	const [currency, setCurrency] = useState(getCookie("shop_currency") === '' ? 'EUR' : getCookie("shop_currency"))

	function handleClick(choice){
		setCurrency(choice.toUpperCase())
    }

	return (
		<div className="currency_container">
			<div className="dropdown">
                <button className="dropdown-toggle dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currency}
                </button>
                <ul className="dropdown-menu dark currency" aria-labelledby="dropdownMenuButton">
					<li onClick={()=>{handleClick('ron')}}><span>RON</span></li>
					<li onClick={()=>{handleClick('eur')}}><span>EUR</span></li>
                    <li onClick={()=>{handleClick('usd')}}><span>USD</span></li>
                </ul>
            </div>
		</div>
	)
}

export default Currency