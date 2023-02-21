import React from 'react'
import BandContact from './bandContact'
import Currency from './currency'
import Language from './language'

function Band(props){
	return (
		<div className="band_container">
      <div className="band">
        <Language></Language>
        <Currency></Currency>
        <BandContact contact={props.contact}></BandContact>
      </div>
		</div>
	)
}

export default Band