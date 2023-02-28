import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Panel from './panel'
import Sort from './sort'
import ProductList from './productList'
import { translate } from '../../../translate'
import {sortList} from '../../../utils'

function Products(props) {
  const {filter, sort, search} = props
  const [products, setProducts] = useState([])
  let array = [...props.products]

  useEffect(() => {
      if(sort){
          if(sort.price === "asc"){
              array = sortList(array, 'price', true)
          } else if(sort.price === "desc"){
              array = sortList(array, 'price', false)
          }
      }

      if(search !== ""){
          array = array.filter(function(x){
              console.log(x)
              if(x.title.indexOf(search) > 0 || x.category.indexOf(search) > 0 || x.description_long.indexOf(search) > 0 || x.description_short.indexOf(search) > 0 || x.subcategory.indexOf(search) > 0 || x.type.indexOf(search) > 0){
                  return x
              }
          })
      }

      if(!checkFilterEmpty()){
        console.log('filter ', filter)
      }
      
      setProducts(array)
  }, [filter, sort, search])

  function checkFilterEmpty(){
    if(filter.category.length === 0 && filter.color.length === 0 && filter.size.length === 0 && filter.stars.length === 0 && filter.subcategory.length === 0 && filter.type.length === 0){
        return true
    }
    return false
}

	return <Container fluid className="container_box products_container">						
      <Row>
        <Col lg={2} md={3} sm={3} className="panel_container">
          <Panel lang={props.lang} categories={props.categories}></Panel>
        </Col>
        <Col lg={10} md={9} sm={9}>
          <div className="body_container">
            <Row>
              <Col sm={12}>
                <Sort lang={props.lang}></Sort>
              </Col>
            </Row>
            <Row>
              {products && products.length>0 ? <ProductList lang={props.lang} products={products}></ProductList> : <Col sm={12}>                
                <p>{translate({lang: props.lang, info: "no_products"})}</p>
              </Col>}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
}

export default Products