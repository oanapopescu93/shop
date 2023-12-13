import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { changePage } from '../../reducers/page'
import { translate } from '../../translations/translate'
// import { changeSearch } from '../../reducers/search'
// import { filterAdd } from '../../reducers/filter'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';

function NavbarComponent(props){	
    const {settings, home} = props
    const [searchValue, setSearchValue] = useState('')	
    let dispatch = useDispatch()
    let categories = []
    if(home.categories && home.categories[0]){
        categories = Object.getOwnPropertyNames(home.categories[0])
    }
  

    function handleClick(category, subcategory, type){
      dispatch(changePage({name: 'products'}))
      console.log({category, subcategory, type})
      // dispatch(filterAdd({category, subcategory, type}))
    }

    function handleSearch(e){
      //dispatch(changeSearch(searchValue))
    }

    function updateInputValue(e){
      setSearchValue(e.target.value)
    }
  
	  return <Navbar expand="lg" className="shop_navbar">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
                                return <li onClick={()=>handleClick(x, y, z)} key={k}>{z}</li>
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
      </Container>
    </Navbar>
}

export default NavbarComponent