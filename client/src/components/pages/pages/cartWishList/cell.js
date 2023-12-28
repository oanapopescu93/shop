import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { translate } from '../../../../translations/translate'
import Quantity from '../../../partials/product/quantity'
import Size from '../../../partials/product/size'
import Color from '../../../partials/product/color'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faTrash} from '@fortawesome/free-solid-svg-icons'

function Cell(props){
    const {template, item, settings} = props
    let lang = settings.lang

    function updateProduct(e){ 
        if(props.updateProduct && typeof props.updateProduct === "function"){
            props.updateProduct(e)
        }
    }
    function deleteProduct(){ 
        if(props.deleteProduct && typeof props.deleteProduct === "function"){
            props.deleteProduct(item)
        }
    }
    function moveProduct(){ 
        if(props.moveProduct && typeof props.moveProduct === "function"){
            props.moveProduct(item)
        }
    }

    return <Row className="cart_wish_cell">
        <Col sm={4} className="cart_wish_cell_image">
            <img src={item.url ? item.url : "/img/products/nopicture.gif"} alt="image_cart"/>
        </Col>
        <Col sm={8} className="cart_wish_cell_info">
            <Row>
                <Col sm={10}>
                    <Row>
                        <Col sm={12}><h4>{item.title}</h4></Col>
                    </Row>
                    {template === "cart" ? <Row>
                        <Col sm={4}>
                            <p><span>{translate({lang: lang, info: "size"})}</span>: {item.size_chosen}<span></span></p>
                            <p><span>{translate({lang: lang, info: "color"})}</span>: {item.color_chosen}<span></span></p>
                        </Col>
                        <Col sm={8}>
                            <Row>
                                <Col sm={6}>
                                    <Quantity lang={lang} item={item} update={(e)=>{updateProduct(e)}}></Quantity>
                                </Col>
                                <Col sm={3}>
                                    <Size lang={lang} item={item} update={(e)=>{updateProduct(e)}}></Size>
                                </Col>
                                <Col sm={3}>
                                    <Color lang={lang} item={item} update={(e)=>{updateProduct(e)}}></Color> 
                                </Col>
                            </Row>
                        </Col>
                    </Row> : <Row>
                        <Col sm={12}>
                            <p><span>{translate({lang: lang, info: "size"})}</span>: {item.size_chosen}<span></span></p>
                            <p><span>{translate({lang: lang, info: "color"})}</span>: {item.color_chosen}<span></span></p>
                        </Col>
                    </Row>} 
                </Col>
                <Col sm={2}>
                    <Button type="button" onClick={(e)=>moveProduct(e)} className="mybutton round button_transparent">
                        <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <Button type="button" onClick={(e)=>deleteProduct(e)} className="mybutton round button_transparent">
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Col>            
            </Row>
        </Col>
    </Row>
}
export default Cell