import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { resetPage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'

function Contact(props){
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(resetPage('Home'))
    }
    return <Container id="contact">
        <div className="page_content">
               contact
        </div>
        <div className="text_center">
            <Button type="button" onClick={()=>handleBack()} className="mybutton round button_transparent shadow_convex">
                {translate({lang: props.lang, info: "back"})}
            </Button>
        </div>
    </Container>
}
export default Contact