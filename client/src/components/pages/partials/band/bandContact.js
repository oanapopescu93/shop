import React from 'react'

function BandContact(props){	
	let email = ''
    let phone_text = ''
    let phone_link = ''
    if(props.contact && props.contact.email.link){
        email = props.contact.email.link
    }
    
    if(props.contact && props.contact.phone && props.contact.phone.text){
        phone_text = props.contact.phone.text
    }
    if(props.contact && props.contact.phone && props.contact.phone.link){
        phone_link = props.contact.phone.link
    }

	return (
		<ul className="band_contact">
            {email !== '' ? <li><a href={"mailto: "+email}>{email}</a></li> : null}
            {phone_text !== '' && phone_link !== '' ? <li><a href={"tel:"+phone_link}>{phone_text}</a></li> : null}            
        </ul>
	)
}

export default BandContact