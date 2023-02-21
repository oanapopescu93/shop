import React from 'react'
function Stars(props){
	let stars = props.stars
	return (
		<div className="stars">
			{							
        stars.map(function(item, i){
          return <i key={i} className={"fa "+item} aria-hidden="true"></i>
        })
      }
		</div>
	)
}
export default Stars