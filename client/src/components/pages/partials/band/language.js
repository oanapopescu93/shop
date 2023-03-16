import React, {useState} from 'react'
import { getCookie, setCookie } from '../../../utils'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../../../reducers/settings'

function Language(props){	
	const [lang, setlang] = useState(getCookie("shop_language") === '' ? 'ENG' : getCookie("shop_language"))
	let dispatch = useDispatch()

	function handleClick(choice){
		setlang(choice)
		dispatch(changeLanguage(choice))
    }

	return (
		<div className="language_container">
			<div className="dropdown">
                <button className="dropdown-toggle dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {lang}
                </button>
                <ul className="dropdown-menu dark language" aria-labelledby="dropdownMenuButton">
					<li onClick={()=>{handleClick('ENG')}}><span>ENG</span></li>
					<li onClick={()=>{handleClick('RO')}}><span>RO</span></li>
                </ul>
            </div>
		</div>
	)
}

export default Language