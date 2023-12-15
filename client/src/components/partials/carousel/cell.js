import React from 'react'
import { translate } from '../../../translations/translate'
import { Button} from 'react-bootstrap'

function Cell(props) {
    const {lang, index, data, template} = props 
    
    function handleClick(id){
        if(props.handleClick && typeof props.handleClick === "function"){
            props.handleClick(id)
        }
    }

	return <>
        {(() => {
            switch (template) {
                case "promo":
                    return <div className="cell_promo_container">
                        <div className="cell_promo shadow_concav">
                            <div className="cell_info">
                                <h4>{data.title}</h4>
                            </div>
                            <div className="cell_button">
                                <Button 
                                    type="button"  
                                    className="mybutton round button_transparent shadow_convex"
                                    onClick={()=>{handleClick(data.id)}}
                                >{translate({lang: lang, info: "Click"})}</Button>
                            </div>
                        </div>
                    </div>               
                default:
                    return <div key={index}>{translate({lang: lang, info: "error"})}</div>
            }
        })()}
        
    </>
}

export default Cell