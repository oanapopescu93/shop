import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { changePage } from '../../reducers/page'
import { translate } from '../../translate'
import { changeSearch } from '../../reducers/search'
import { filterAdd } from '../../reducers/filter'

function Navbar(props){	
  let object = props.category[0] 
  let categories = Object.getOwnPropertyNames(object)
  const [searchValue, setSearchValue] = useState('')	
  let dispatch = useDispatch()

  function handleClick(category, subcategory, type){
    dispatch(changePage({name: 'products'}))
    dispatch(filterAdd({category, subcategory, type}))
  }

  function handleSearch(e){
    dispatch(changeSearch(searchValue))
  }

  function updateInputValue(e){
    setSearchValue(e.target.value)
  }
  
	return (		
		<nav className="navbar navbar-expand-sm navbar_shop">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {							
            categories.map(function(item0, i){
              let subcategories = Object.getOwnPropertyNames(object[item0])
              return <li key={i} className="nav-item dropdown mega-dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  <span>{translate({lang: props.lang, info: item0})}</span>
                </a>
                <div className="dropdown-menu mega-menu">
                <Row>
                  {							
                    subcategories.map(function(item1, j){
                      let types = Object.getOwnPropertyNames(object[item0][item1])
                      return <Col key={j} lg={3} md={4} sm={4}>
                        <h3 onClick={()=>{handleClick(item0, item1)}}>{translate({lang: props.lang, info: item1})}</h3>
                        <ul>
                            {							
                              types.map(function(item2, k){
                                return <li key={k} onClick={()=>{handleClick(item0, item1, item2)}}><span>{translate({lang: props.lang, info: item2})}</span></li>
                              })
                            }
                          </ul>
                      </Col>
                    })
                  }
                </Row>
                </div>
              </li>
            })
          }
        </ul>
        <form className="form-inline">
          <input className="input_navbar " type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{updateInputValue(e)}}/>
          <button className="button_navbar button_color" type="button" onClick={(e)=>{handleSearch(e)}}>{translate({lang: props.lang, info: "search"})}</button>
        </form>
      </div>
    </nav>
	)
}

export default Navbar