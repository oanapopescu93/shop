import React from 'react'
import star_full from '../../img/icons_other/rating/star_full.png'
import star_half from '../../img/icons_other/rating/star_half.png'
import star_empty from '../../img/icons_other/rating/star_empty.png'

function Stars(props){
	let score = props.score
    let max = props.max ? parseInt(props.max) : 5
    let stars = []
    let first = true
    for(let i =1; i<=max; i++){
        let x = parseInt(i)
        let t = Math.floor(score)  
        let decimals = score % 1
        if(x < t){
            stars.push(2)
        } else {   
            if(first){
                if(decimals === 0){
                    stars.push(2)
                } else {
                    stars.push(1)
                }
            } else {
                stars.push(0)
            }   
            first = false
        }        
    }

	return <div className="stars">
        {stars.map(function(item, i){
            switch(item) {
                case 2:
                    return <img key={i} src={star_full} alt="star_full" className="star" />
                case 1:
                    return <img key={i} src={star_half} alt="star_half" className="star" />
                default: 
                    return <img key={i} src={star_empty} alt="star_empty" className="star" />
            }                    
        })}
	</div>
}

export default Stars