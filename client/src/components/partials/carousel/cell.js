import React from 'react'
import {useDispatch} from 'react-redux'
import { translate } from '../../../translations/translate'
import { Button} from 'react-bootstrap'
import { cartAdd } from '../../../reducers/cartWishlist'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Cell(props) {
    const {lang, index, data, template} = props 
    let dispatch = useDispatch()
    
    function handleClick(id){
        if(props.handleClick && typeof props.handleClick === "function"){
            props.handleClick(id)
        }
    }
    
    function handleAddCart(e){
        let newProduct = {...e}
		newProduct.qty = 1
        newProduct.size_chosen = e.size[0]
		newProduct.color_chosen = e.color[0]
        dispatch(cartAdd(newProduct))
    }

	return <>
        {(() => {
            switch (template) {
                case "promo":
                    return <div className="cell_promo_container">
                        <div className="cell_promo">
                            <div className="cell_image">
                                <img src={data.url} alt="image_promo"/>
                            </div>
                            <div className="cell_button">
                                <Button 
                                    type="button"  
                                    className="mybutton button_fullcolor_dark"
                                    onClick={()=>{handleAddCart(data)}}
                                >
                                    <FontAwesomeIcon icon={faCartShopping} onClick={()=>handleClick('Cart')} />
                                    &nbsp;{translate({lang: lang, info: "add_cart"})}
                                </Button>
                            </div>
                            <div className="cell_info" onClick={()=>{handleClick(data.id)}}>
                                <h4>{data.title}</h4>
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