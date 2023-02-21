import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import men from '../../../img/categories/men.jpg'
import women from '../../../img/categories/women.png'
import children from '../../../img/categories/children.jpg'
import { useDispatch } from 'react-redux'
import {page, filter} from '../../../actions/actions'

function Categories(props){
    let dispatch = useDispatch()	  

    function handleClick(category){
        let subcategory = null
        let type = null
        dispatch(page({name: 'products'}))
        dispatch(filter({category, subcategory, type}))
    }

	return (
        <Row className="category_container">
            <Col sm={12}>
                <Row>
                    <Col sm={4}>
                        <div onClick={()=>{handleClick(men)}} className="category_box">
                            <img src={men} alt="category"/>
                            {props.lang === "ro" ? <h4>Barbati</h4> : <h4>Men</h4>}
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div onClick={()=>{handleClick(women)}} className="category_box">
                            <img src={women} alt="category"/>
                            {props.lang === "ro" ? <h4>Femei</h4> : <h4>Women</h4>}
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div onClick={()=>{handleClick(children)}} className="category_box">
                            <img src={children} alt="category"/>
                            {props.lang === "ro" ? <h4>Copii</h4> : <h4>Children</h4>}
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
	)
}

export default Categories