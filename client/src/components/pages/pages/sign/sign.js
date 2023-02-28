import React, {useState} from 'react'
import SignIn from './signIn'
import SignUp from './signUp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Sign(props){
	const [signVisible, setSignVisible] = useState(true)
	const [linkLogin, setLinkLogin] = useState('active')
	const [linkSign, setLinkSign] = useState('')	

	function handleClick(link){
		if(link === "sign_in"){			
			setSignVisible(true)
			setLinkLogin('active')
			setLinkSign('')
		} else if(link === "sign_up"){
			setSignVisible(false)
			setLinkLogin('')
			setLinkSign('active')
		}
	}

	function submit(){
		console.log('SUBMIT')
	}

	return (
		<Container fluid className="container_box sign_in_up_container">						
			<Row>
				<Col sm={2} md={4} lg={4}></Col>
				<Col sm={8} md={4} lg={4}>
					<Row>
						<Col sm={12} className="sign_in_up_box">
							<ul>
								<li className={linkLogin} onClick={()=>{handleClick("sign_in")}}><span>Sign in</span></li>
								<li className={linkSign} onClick={()=>{handleClick("sign_up")}}><span>Sign up</span></li>
							</ul>
							{signVisible ? <SignIn submit={()=>{submit()}} lang={props.lang} socket={props.socket}></SignIn> : <SignUp submit={()=>{submit()}} lang={props.lang} socket={props.socket}></SignUp>}
						</Col>
					</Row>	
				</Col>
				<Col sm={2} md={4} lg={4}></Col>
			</Row>
		</Container>
	)
}

export default Sign