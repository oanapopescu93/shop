import React, {useState} from 'react'
import { getCookie, setCookie } from '../../../utils'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../../../reducers/settings'

function Language(props){	
	const [lang, setlang] = useState(getCookie("shop_language") === '' ? 'ENG' : getCookie("shop_language").toUpperCase())
	let dispatch = useDispatch()

	function handleClick(choice){
		setlang(choice.toUpperCase())
		dispatch(changeLanguage(choice))
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