import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { resetPage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'

function Cart(props){
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(resetPage('Home'))
    }
    return <div className="cart">
        <div className="page_content">
            <p>No list</p>
        </div>
        <div className="text_center">
            <Button type="button" onClick={()=>handleBack()} className="mybutton round button_transparent shadow_convex">
                {translate({lang: props.lang, info: "back"})}
            </Button>
        </div>
    </div>
}
export default Cart