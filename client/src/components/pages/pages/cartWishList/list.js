import React from 'react'
import {useDispatch} from 'react-redux'
import { translate } from '../../../../translations/translate'
import Cell from './cell'
import { cartRemove, cartUpdate, wishRemove, wishAdd } from '../../../../reducers/cartWishlist'

function List(props){
    const {template, cart, wish, settings} = props
    let lang = settings.lang
    let dispatch = useDispatch()

    function updateProduct(e){
        switch (template) {
            case "cart":
                dispatch(cartUpdate(e))            
            default:                
        }
    }

    function deleteProduct(e){
        switch (template) {
            case "cart":
                dispatch(cartRemove(e))             
            case "wish":
                dispatch(wishRemove(e))
            default:                
        }
    }

    function moveProduct(e){ //move product from cart to wishlist
        dispatch(wishAdd(e))
        dispatch(cartRemove(e))
    }
    
    return <div className="cart_wish_list">
        {(() => {
            switch (template) {
                case "cart":
                    console.log(cart) 
                    return <>
                        {cart.map(function(item, i){
                            return <Cell key={i} template={template} item={item} settings={settings} updateProduct={(e)=>updateProduct(e)} deleteProduct={(e)=>deleteProduct(e)} moveProduct={(e)=>moveProduct(e)}></Cell>
                        })}  
                    </>                
                case "wish":
                    console.log(wish)
                    return <>
                        {wish.map(function(item, i){
                            return <Cell key={i} template={template} item={item} settings={settings} deleteProduct={(e)=>deleteProduct(e)}></Cell>
                        })}
                    </>
                default:
                    return <p>{translate({lang: lang, info: "error"})}</p>
            }
        })()}
    </div>
}
export default List