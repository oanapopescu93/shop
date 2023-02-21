import React from 'react'
import logo from '../../img/logo.png'

function Loader(props){
	return (
		<div className="loader_container">
			<div className="loader">
          <img src={logo} alt="loader" />
			    <p>Loading</p>
      </div>
		</div>
	)
}

export default Loader