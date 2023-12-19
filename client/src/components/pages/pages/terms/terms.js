import React from 'react'
import { Button, Container } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { resetPage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'
import TermsEng from './termsEng'
import TermsRo from './termsRo'
import TermsDe from './termsDe'
import TermsEs from './termsEs'
import TermsFr from './termsFr'
import TermsIt from './termsIt'

function Terms(props){
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(resetPage('Home'))
    }
    return <Container id="terms">
        <div className="page_content">
            {(() => {
                switch (props.lang) {
                    case "DE":
                        return <TermsDe></TermsDe>
                    case "ES":
                        return <TermsEs></TermsEs>
                    case "FR":
                        return <TermsFr></TermsFr>
                    case "IT":
                        return <TermsIt></TermsIt>
                    case "RO":
                        return <TermsRo></TermsRo>
                    case "ENG":
                    default:
                        return <TermsEng></TermsEng>
                }
            })()}    
        </div>
        <div className="text_center">
            <Button type="button" onClick={()=>handleBack()} className="mybutton round button_transparent shadow_convex">
                {translate({lang: props.lang, info: "back"})}
            </Button>
        </div>
    </Container>
}
export default Terms