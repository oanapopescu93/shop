import React from 'react'
import Button from 'react-bootstrap/Button'

function Not_found(props) {
  let lang = props.lang
  function handleBack(){
    window.location.href = "/"
  }    
	return ( 
    <div className="not_found_container">
      <div className="not_found">
        <h1>404</h1>
        {lang === "ro" ? <h2>Pagina nu exista</h2> : <h2>Page not found</h2>}  
        <Button className="shop_button" type="button" onClick={handleBack}>{lang === "ro" ? <span>Inapoi</span> : <span>Back</span>}</Button>                              
      </div>                         
    </div> 
	)
}

export default Not_found