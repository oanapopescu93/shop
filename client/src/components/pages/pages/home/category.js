import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import { translate } from '../../../../translations/translate'
import { useDispatch } from 'react-redux'
import { changePage } from '../../../../reducers/page'

function Category(props) {
    const {home, settings} = props
    let lang = settings.lang
    let dispatch = useDispatch()
    let categories = []
    if(home.categories && home.categories[0]){
        categories = Object.getOwnPropertyNames(home.categories[0])
    } 

    function handleClick(){
        dispatch(changePage("Products"))
    }

    return <div id="category"> 
        <Container>
            <Row>
                <Col sm={12}>
                    <h3>{translate({lang: lang, info: "categies"})}</h3>                    
                </Col>
            </Row>
            <Row>
                {categories.map(function(x, i){
                return <Col sm={4} key={i} onClick={()=>handleClick()}>
                    <h4>{x}</h4>
                    <img src={null} alt="category_image" />  
                </Col>
                })}
            </Row>
        </Container>
    </div>
}

export default Category