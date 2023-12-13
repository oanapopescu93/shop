import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { changePage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'
import AboutEng from './aboutEng'
import AboutRo from './aboutRo'
import AboutDe from './aboutDe'
import AboutEs from './aboutEs'
import AboutFr from './aboutFr'
import AboutIt from './aboutIt'

function About(props){
    let name = "Shop"
    let dispatch = useDispatch()
    function handleBack(){
        dispatch(changePage('Home'))
    }
    return <div className="about">
        <div className="page_content">
            {(() => {
                switch (props.lang) {
                    case "DE":
                        return <AboutDe name={name}></AboutDe>
                    case "ES":
                        return <AboutEs name={name}></AboutEs>
                    case "FR":
                        return <AboutFr name={name}></AboutFr>
                    case "IT":
                        return <AboutIt name={name}></AboutIt>
                    case "RO":
                        return <AboutRo name={name}></AboutRo>
                    case "ENG":
                    default:
                        return <AboutEng name={name}></AboutEng>
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
export default About