import React, {useState} from 'react'
import { changeCurrency } from '../../../reducers/settings'
import { useDispatch } from 'react-redux'
import { getCookie, setCookie } from '../../../utils'

function Currency(props){	
	const [currency, setCurrency] = useState(getCookie("shop_currency") === '' ? 'RON' : getCookie("shop_currency"))
	let dispatch = useDispatch()

	function handleClick(choice){
		setCurrency(choice)
		dispatch(changeCurrency(choice))
    }

	return (
		<div className="currency_container">
			<div className="dropdown">
                <button className="dropdown-toggle dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {currency}
                </button>
                <ul className="dropdown-menu dark currency" aria-labelledby="dropdownMenuButton">
					<li onClick={()=>{handleClick('RON')}}><span>RON</span></li>
					<li onClick={()=>{handleClick('EUR')}}><span>EUR</span></li>
                    <li onClick={()=>{handleClick('USD')}}><span>USD</span></li>
                </ul>
            </div>
		</div>
	)
}

export default Currency