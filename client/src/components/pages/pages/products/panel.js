import React from 'react'
import {useDispatch} from 'react-redux'
import { translate } from '../../../translate'
import { getStarArray } from '../../../utils'
import Stars from '../../partials/stars'

function Panel(props){
    let dispatch = useDispatch()

    function handleClick(e, filter){
      let elem = e.target.closest('li')
      if(elem.classList.contains("checked")){
        elem.classList.remove("checked")
      } else {
        elem.classList.add("checked")
      }
    }

    return (
      <div className="panel">
        <div className="panel_box panel_category">
          <h4>{translate({lang: props.lang, info: "category"})}</h4>
          <ul>
            <li onClick={(e)=>{handleClick(e, {'category': 'men'} )}}><span className="panel_category">{translate({lang: props.lang, info: "men"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'category': 'women'} )}}><span className="panel_category">{translate({lang: props.lang, info: "women"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'category': 'children'} )}}><span className="panel_category">{translate({lang: props.lang, info: "children"})}</span></li>
          </ul>
        </div>
        <div className="panel_box panel_type">
          <h4>{translate({lang: props.lang, info: "type"})}</h4>
          <ul>
            <li onClick={(e)=>{handleClick(e, {'type': 'shirts'} )}}><span className="panel_type">{translate({lang: props.lang, info: "shirts"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'pants'} )}}><span className="panel_type">{translate({lang: props.lang, info: "pants"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'skirts'} )}}><span className="panel_type">{translate({lang: props.lang, info: "skirts"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'coats'} )}}><span className="panel_type">{translate({lang: props.lang, info: "coats"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'sport shoes'} )}}><span className="panel_type">{translate({lang: props.lang, info: "sport_shoes"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'boots'} )}}><span className="panel_type">{translate({lang: props.lang, info: "boots"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'sandals'} )}}><span className="panel_type">{translate({lang: props.lang, info: "sandals"})}</span></li>
            <li onClick={(e)=>{handleClick(e, {'type': 'accesories'} )}}><span className="panel_type">{translate({lang: props.lang, info: "accesories"})}</span></li>
          </ul>
        </div>
        <div className="panel_box panel_size">
          <h4>{translate({lang: props.lang, info: "size"})}</h4>
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
          <h4>{translate({lang: props.lang, info: "color"})}</h4>
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
          <h4>{translate({lang: props.lang, info: "rating"})}</h4>
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