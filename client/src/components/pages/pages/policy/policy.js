import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { changePage } from '../../../../reducers/page'
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
        dispatch(changePage('Home'))
    }
    return <div className="policy">
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
            <Button type="button" onClick={()=>handleBack()} className="mybutton round button_transparent shadow_convex">
                {translate({lang: props.lang, info: "back"})}
            </Button>
        </div>
    </div>
}
export default Policy