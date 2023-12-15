import React, {useState, useEffect} from 'react'
import List from './list'
import { translate } from '../../../../translations/translate'
import { Row, Col } from 'react-bootstrap'
import Panel from './panel'

function Products(props) {
    const {home} = props
    const [list, setList] = useState(home.products)
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
		handleFilter()
		return () => {
			setList([])
		}  
	}, []) 

    function handleFilter(){
        setLoaded(true) 
    }

    return <Row> 
        {loaded ? <>
            {list && list.length>0 ? <>
                <Col lg={4} md={4} sm={6}>
                    <Panel {...props}></Panel>
                </Col>
                <Col lg={8} md={8} sm={6}>
                    <List list={list} {...props}></List>
                </Col>
            </> : <p>{translate({lang: props.lang, info: "no_products"})}</p>}
        </> : <p>{translate({lang: props.lang, info: "loading"})}</p>}
    </Row>
}

export default Products