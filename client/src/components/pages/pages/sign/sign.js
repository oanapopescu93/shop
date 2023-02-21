import React, {useState} from 'react'
import SignIn from './signIn'
import SignUp from './signUp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Sign(props){
	const [signVisible, setSignVisible] = useState(true)

	function handleClick(choice){
		setSignVisible(choice)
	}

	return (
		<Container>						
      <Row>
        <Col sm={12}>
					<div className="sign_in_up_container">
						<ul>
							<li onClick={()=>{handleClick(true)}}><span>Sign in</span></li>
							<li onClick={()=>{handleClick(false)}}><span>Sign up</span></li>
						</ul>
						{signVisible ? <SignIn lang={props.lang} socket={props.socket}></SignIn> : <SignUp lang={props.lang} socket={props.socket}></SignUp>}
					</div>
		  	</Col>
			</Row>
		</Container>
	)
}

export default Sign