import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import { translate } from '../../../../translations/translate'
import { useDispatch } from 'react-redux'
import { changePage } from '../../../../reducers/page'

function Banner(props) {
    const {settings} = props
    let lang = settings.lang
    let dispatch = useDispatch()

    function handleClick(){
        dispatch(changePage("Products"))
    }

    return <div id="banner"> 
        <Container>
            <Row>
                <Col>
                    <h3>Banner</h3>
                    <p>Banner will come here</p>
                    <Button type="button" onClick={()=>handleClick()} className="mybutton button_transparent">
                        {translate({lang: lang, info: "button"})}
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Banner