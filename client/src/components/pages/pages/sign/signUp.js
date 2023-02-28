import React from 'react'
import { translate } from '../../../translate'

function SignUp(props){
	return (
		<div className="sign_up_container">
			<h3>{translate({lang: props.lang, info: "sign_up"})}</h3>
		</div>
	)
}

export default SignUp