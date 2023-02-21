import React from 'react'
import {useDispatch} from 'react-redux'
import { filterAdd, filterRemove } from '../../../actions/actions'
import { getStarArray } from '../../../utils'
import Stars from '../../partials/stars'

function Panel(props){
    let lang = props.lang
    let dispatch = useDispatch()

    function handleClick(e, filter){
      let elem = e.target.closest('li')
      if(elem.classList.contains("checked")){
        elem.classList.remove("checked")
        dispatch(filterRemove(filter))
      } else {
        elem.classList.add("checked");
        dispatch(filterAdd(filter))
      }
    }

    return (
      <div className="panel">
        <div className="panel_box panel_category">
          {lang === "ro" ? <h4>Categorie</h4> : <h4>Category</h4>}
          <ul>
            <li onClick={(e)=>{handleClick(e, {'category': 'men'} )}}>{lang === "ro" ? <span className="panel_category">Barbati</span> : <span className="panel_category">Men</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'category': 'women'} )}}>{lang === "ro" ? <span className="panel_category">Women</span> : <span className="panel_category">Women</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'category': 'children'} )}}>{lang === "ro" ? <span className="panel_category">Children</span> : <span className="panel_category">Children</span>}</li>
          </ul>
        </div>
        <div className="panel_box panel_type">
          {lang === "ro" ? <h4>Tip</h4> : <h4>Type</h4>}
          <ul>
            <li onClick={(e)=>{handleClick(e, {'type': 'shirts'} )}}>{lang === "ro" ? <span className="panel_type">Shirts</span> : <span className="panel_type">Shirts</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'pants'} )}}>{lang === "ro" ? <span className="panel_type">Pants</span> : <span className="panel_type">Pants</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'skirts'} )}}>{lang === "ro" ? <span className="panel_type">Skirts</span> : <span className="panel_type">Skirts</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'coats'} )}}>{lang === "ro" ? <span className="panel_type">Coats</span> : <span className="panel_type">Coats</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'sport_shoes'} )}}>{lang === "ro" ? <span className="panel_type">Sport shoes</span> : <span className="panel_type">Sport shoes</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'boots'} )}}>{lang === "ro" ? <span className="panel_type">Boots</span> : <span className="panel_type">Boots</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'sandals'} )}}>{lang === "ro" ? <span className="panel_type">Sandals</span> : <span className="panel_type">Sandals</span>}</li>
            <li onClick={(e)=>{handleClick(e, {'type': 'accesories'} )}}>{lang === "ro" ? <span className="panel_type">Accesories</span> : <span className="panel_type">Accesories</span>}</li>
          </ul>
        </div>
        <div className="panel_box panel_size">
          {lang === "ro" ? <h4>Marime</h4> : <h4>Size</h4>}
          <ul>
            <li onClick={(e)=>{handleClick(e, {'size': 'XS'} )}}><span className="panel_dot_size">XS</span></li>
            <li onClick={(e)=>{handleClick(e, {'size': 'S'} )}}><span className="panel_dot_size">S</span></li>
            <li onClick={(e)=>{handleClick(e, {'size': 'M'} )}}><span className="panel_dot_size">M</span></li>
            <li onClick={(e)=>{handleClick(e, {'size': 'L'} )}}><span className="panel_dot_size">L</span></li>
            <li onClick={(e)=>{handleClick(e, {'size': 'XL'} )}}><span className="panel_dot_size">XL</span></li>
            <li onClick={(e)=>{handleClick(e, {'size': 'XXL'} )}}><span className="panel_dot_size">XXL</span></li>
            <li onClick={(e)=>{handleClick(e, {'size': '3XL'} )}}><span className="panel_dot_size">3XL</span></li>
          </ul>
        </div>
        <div className="panel_box panel_color">
          {lang === "ro" ? <h4>Culoare</h4> : <h4>Color</h4>}
          <ul>
            <li onClick={(e)=>{handleClick(e, {'color': 'red'} )}}><span className="panel_dot_color red"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'orange'} )}}><span className="panel_dot_color orange"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'pink'} )}}><span className="panel_dot_color pink"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'yellow'} )}}><span className="panel_dot_color yellow"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'green'} )}}><span className="panel_dot_color green"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'blue'} )}}><span className="panel_dot_color blue"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'purple'} )}}><span className="panel_dot_color purple"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'brown'} )}}><span className="panel_dot_color brown"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'white'} )}}><span className="panel_dot_color white"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'grey'} )}}><span className="panel_dot_color grey"></span></li>
            <li onClick={(e)=>{handleClick(e, {'color': 'black'} )}}><span className="panel_dot_color black"></span></li>
          </ul>
        </div>
        <div className="panel_box panel_reviews">
          {lang === "ro" ? <h4>Rating</h4> : <h4>Rating</h4>}
          <ul>
            <li onClick={(e)=>{handleClick(e, {'stars': 5} )}}><Stars stars={getStarArray(5)}></Stars></li>
            <li onClick={(e)=>{handleClick(e, {'stars': 4} )}}><Stars stars={getStarArray(4)}></Stars></li>
            <li onClick={(e)=>{handleClick(e, {'stars': 3} )}}><Stars stars={getStarArray(3)}></Stars></li>
            <li onClick={(e)=>{handleClick(e, {'stars': 2} )}}><Stars stars={getStarArray(2)}></Stars></li>
            <li onClick={(e)=>{handleClick(e, {'stars': 1} )}}><Stars stars={getStarArray(1)}></Stars></li>
          </ul>
        </div>
      </div>
    )
}

export default Panel