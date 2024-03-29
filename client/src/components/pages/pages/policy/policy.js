import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { resetPage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'
import PolicyEng from './policyEng'
import PolicyRo from './policyRo'
import PolicyDe from './policyDe'
import PolicyEs from './policyEs'
import PolicyFr from './policyFr'
import PolicyIt from './policyIt'

function Policy(props){
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(resetPage('Home'))
    }
    return <Container id="policy">
        <div className="page_content">
            {(() => {
                switch (props.lang) {
                    case "DE":
                        return <PolicyDe></PolicyDe>
                    case "ES":
                        return <PolicyEs></PolicyEs>
                    case "FR":
                        return <PolicyFr></PolicyFr>
                    case "IT":
                        return <PolicyIt></PolicyIt>
                    case "RO":
                        return <PolicyRo></PolicyRo>
                    case "ENG":
                    default:
                        return <PolicyEng></PolicyEng>
                }
            })()}    
        </div>
        <div className="text_center">
            <Button type="button" onClick={()=>handleBack()} className="mybutton round button_transparent">
                {translate({lang: props.lang, info: "back"})}
            </Button>
        </div>
    </Container>
}
export default Policy