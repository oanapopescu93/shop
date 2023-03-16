import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import men from '../../../img/categories/men.jpg'
import women from '../../../img/categories/women.png'
import children from '../../../img/categories/children.jpg'
import { useDispatch } from 'react-redux'
import { translate } from '../../../translate'
import { changePage } from '../../../reducers/page'
import { filterAdd } from '../../../reducers/filter'

function Categories(props){
    let dispatch = useDispatch()	  

    function handleClick(category){
        let subcategory = null
        let type = null
        dispatch(changePage({name: 'products'}))
        dispatch(filterAdd({category, subcategory, type}))
    }

	return (
        <Row className="category_container">
            <Col sm={12}>
                <Row>
                    <Col sm={4}>
                        <div onClick={()=>{handleClick('men')}} className="category_box">
                            <img src={men} alt="category"/>
                            <h4>{translate({lang: props.lang, info: "men"})}</h4>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div onClick={()=>{handleClick('women')}} className="category_box">
                            <img src={women} alt="category"/>
                            <h4>{translate({lang: props.lang, info: "women"})}</h4>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div onClick={()=>{handleClick('children')}} className="category_box">
                            <img src={children} alt="category"/>
                            <h4>{translate({lang: props.lang, info: "children"})}</h4>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
	)
}

export default Categories