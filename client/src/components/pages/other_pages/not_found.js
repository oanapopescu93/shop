import React from 'react'
import Button from 'react-bootstrap/Button'
import { translate } from '../../translate'

function Not_found(props) {
  function handleBack(){
    window.location.href = "/"
  }    
	return ( 
    <div className="container_box not_found_container">
      <div className="not_found">
        <h1>404</h1>
        <h2>{translate({lang: props.lang, info: "page_not_exists"})}</h2>
        <Button className="shop_button" type="button" onClick={handleBack}>{translate({lang: props.lang, info: "back"})}</Button>                              
      </div>                         
    </div> 
	)
}

export default Not_found