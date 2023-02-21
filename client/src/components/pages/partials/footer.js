import React from 'react'

function Footer(props){
	let date = new Date()
	date = date.getFullYear()
	return (
		<div className="footer_container">
      <div className="footer">
			  <footer className="text-center"><h6>Copyright &copy; <span id="copyright_year">{date}</span> Shop. All rights reserved.</h6></footer>
			</div>
		</div>
	)
}

export default Footer