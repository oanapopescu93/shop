import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { changePage, changeSearch, changeSelectedCategory, changeSelectedSubcategory, changeSelectedType } from '../../reducers/page'
import { translate } from '../../translations/translate'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Col, Row } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faUserCircle, faCartShopping} from '@fortawesome/free-solid-svg-icons'

function NavbarComponent(props){	
    const {home, title} = props
    const [searchValue, setSearchValue] = useState('')	
    let dispatch = useDispatch()
    let categories = []
    if(home.categories && home.categories[0]){
        categories = Object.getOwnPropertyNames(home.categories[0])
    } 

    function handleClick(choice, category=null, subcategory=null, type=null){
      dispatch(changePage(choice))
      if(choice === "Products"){
        dispatch(changeSelectedCategory(category))
        dispatch(changeSelectedSubcategory(subcategory))
        dispatch(changeSelectedType(type))
      }
    }

    function handleSearch(){
      dispatch(changeSearch(searchValue))
    }

    function updateInputValue(e){
      setSearchValue(e.target.value)
    }
  
	  return <Navbar expand="lg" className="shop_navbar">
      <Container>
        <Navbar.Brand onClick={()=>handleClick('Home')}>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <span onClick={()=>handleClick('Products')}>{translate({lang: props.lang, info: "all"})}</span>
            {categories.map(function(x, i){
              let subcategories = []
              if(home.categories && home.categories[0] && home.categories[0][x]){
                  subcategories =  Object.getOwnPropertyNames(home.categories[0][x])
              }
              return <NavDropdown title={x} id="basic-nav-dropdown" key={i}>
                <Container>
                <Row>
                  {subcategories.map(function(y, j){
                    return <Col sm={3} key={j}>
                      <h3>{y}</h3>
                      <ul>
                        {(() => {
                            let items = []
                            if(home.categories && home.categories[0] && home.categories[0][x] && home.categories[0][x][y]){
                              items = Object.getOwnPropertyNames(home.categories[0][x][y])
                            }
                            return <>
                              {items.map(function(z, k){
                                return <li onClick={()=>handleClick('Products', x, y, z)} key={k}>{z}</li>
                              })}
                            </>
                        })()}
                      </ul>
                    </Col>
                  })}
                </Row>
                </Container>
              </NavDropdown>
            })}
          </Nav>
        </Navbar.Collapse>
        <form className="form-inline">
          <input className="input_navbar " type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{updateInputValue(e)}}/>
          <button className="button_navbar button_color" type="button" onClick={()=>{handleSearch()}}>{translate({lang: props.lang, info: "search"})}</button>
        </form>
        <p><FontAwesomeIcon icon={faHeart} onClick={()=>handleClick('Wishlist')} /></p>
        <p><FontAwesomeIcon icon={faUserCircle} onClick={()=>handleClick('User')} /></p>
        <p><FontAwesomeIcon icon={faCartShopping} onClick={()=>handleClick('Cart')} /></p>
      </Container>
    </Navbar>
}

export default NavbarComponent