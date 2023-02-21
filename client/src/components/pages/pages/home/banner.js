import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch } from 'react-redux'
import {page} from '../../../actions/actions'

function BannerText(props){
    let dispatch = useDispatch()	  

    function handleClick(){
        dispatch(page({name: 'products'}))
    }

	return <div className={"banner_text " + props.template}>
        {props.lang === "ro" ? <h4>Banner title ro</h4> : <h4>Banner title eng</h4>}
        {props.lang === "ro" ? <p>ro.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.</p> : 
            <p>eng.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra nisl magna, sed hendrerit felis rutrum sed.</p>}        
        <Button className="shop_button" type="button" onClick={handleClick}>{props.lang === "ro" ? <span>Vezi produsele</span> : <span>See the products</span>}</Button>  
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