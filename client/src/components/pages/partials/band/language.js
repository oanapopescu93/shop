import React, {useState} from 'react'
import { getCookie } from '../../../utils'
import { useDispatch } from 'react-redux'
import { language } from '../../../actions/actions'

function Language(props){	
	const [lang, setlang] = useState(getCookie("shop_language") === '' ? 'ENG' : getCookie("shop_language"))
	let dispatch = useDispatch()

	function handleClick(choice){
		let x = choice
		setlang(x.toLowerCase())
		dispatch(language(x))
    }

	return (
		<div className="language_container">
			<div className="dropdown">
                <button className="dropdown-toggle dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {lang}
                </button>
                <ul className="dropdown-menu dark language" aria-labelledby="dropdownMenuButton">
					<li onClick={()=>{handleClick('eng')}}><span>ENG</span></li>
					<li onClick={()=>{handleClick('ro')}}><span>RO</span></li>
                </ul>
            </div>
		</div>
	)
}

export default Language