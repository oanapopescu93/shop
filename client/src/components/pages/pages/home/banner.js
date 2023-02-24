import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch } from 'react-redux'
import {page} from '../../../actions/actions'
import { translate } from '../../../translate'

function BannerText(props){
    let dispatch = useDispatch()	  

    function handleClick(){
        dispatch(page({name: 'products'}))
    }

	return <div className={"banner_text " + props.template}>
        {(() => {
            switch (props.lang) {
                case "ro":
                    return <>
                        <h4>Banner title ro</h4>
                        <p>ro.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.</p>
                    </>
                case "eng":
                default:
                    return <>
                        <h4>Banner title eng</h4>
                        <p>eng.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.</p>
                    </>
            }
        })()}
        <Button className="shop_button" type="button" onClick={handleClick}>{translate({lang: props.lang, info: "see_products"})}</Button>  
    </div>
}

function Banner(props){
	return <Row>
        <div className="banner_container">
            {props.img ? <img src={props.img} alt="banner"/> : null}
            <BannerText lang={props.lang} template={props.template}></BannerText>
        </div>
    </Row>
}

export default Banner