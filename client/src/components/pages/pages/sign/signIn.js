import React from 'react'
import Form from 'react-bootstrap/Form'
import { translate } from '../../../translate'

function SignIn(props){
	function submit(){
		
	}

	return (
		<>
			<Form id="form_sign_in" className="form_sign">
				<Form.Control id="signin_user" type="text" name="user" placeholder="Username" defaultValue=""/>				
				<Form.Control id="signin_pass" autoComplete="off" type="password" name="pass" placeholder="Password" defaultValue=""/>
				<button className="button_color" type="button" onClick={()=>submit()}><span>{translate({lang: props.lang, info: "sign_in"})}</span></button>
			</Form>
		</>		
	)
}

export default SignIn