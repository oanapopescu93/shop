import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { translate } from '../../../../translations/translate'
import Stars from '../../../partials/stars'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { changeSelectedColor, changeSelectedScore, changeSelectedSize, changeSelectedType, changeSelectedCategory } from '../../../../reducers/page'

function Panel(props){
    const {settings, width} = props
    let lang = settings.lang
    let dispatch = useDispatch() 
    const [categoryTitleDropdown, setCategoryTitleDropdown] = useState(null)
    const [typeTitleDropdown, setTypeTitleDropdown] = useState(null)
    const [sizeTitleDropdown, setSizeTitleDropdown] = useState(null)   
    const [colorTitleDropdown, setColorTitleDropdown] = useState(null)  
    const [scoreTitleDropdown, setScoreTitleDropdown] = useState(null)  
    let category_list = ["men", "women", "children"] 
    let type_list = ["shirts", "pants", "skirts", "coats", "sport_shoes", "boots", "sandals", "accesories"] 
    let color_list = ['red', 'orange', 'pink', 'yellow', 'green', 'blue', 'purple', 'brown', 'white', 'grey', 'black']
    let size_list = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
    let score_list = [5, 4, 3, 2, 1]

    function handleClick(category){
        dispatch(changeSelectedCategory(category))
    }

    function handleDropdownCategory(category){
        setCategoryTitleDropdown(category)
        dispatch(changeSelectedCategory(category))
    }
    function handleDropdownType(type){
        setTypeTitleDropdown(type)
        dispatch(changeSelectedType(type))
    }
    function handleDropdownSize(size){
        setSizeTitleDropdown(size)
        dispatch(changeSelectedSize(size))
    }
    function handleDropdownColor(color){
        setColorTitleDropdown(color)
        dispatch(changeSelectedColor(color))
    }
    function handleDropdownScore(score){
        setScoreTitleDropdown(translate({lang: lang, info: "score_" + score}))
        dispatch(changeSelectedScore(score))
    }

    return <div className="panel_container">
        <div className="panel">
            <div className="panel_box panel_category">
                {width > 990 ? <>
                    <h4>{translate({lang: props.lang, info: "category"})}</h4>
                    <ul>
                        <li onClick={(e)=>{handleClick('men')}}><span className="panel_category">{translate({lang: props.lang, info: "men"})}</span></li>
                        <li onClick={(e)=>{handleClick('women')}}><span className="panel_category">{translate({lang: props.lang, info: "women"})}</span></li>
                        <li onClick={(e)=>{handleClick('children')}}><span className="panel_category">{translate({lang: props.lang, info: "children"})}</span></li>
                    </ul>
                </> : <>
                <DropdownButton title={categoryTitleDropdown ? categoryTitleDropdown : translate({lang: lang, info: "category"})} id="panel_size_button" onSelect={handleDropdownCategory}>
                    {category_list.map(function(t, i){
                        return <Dropdown.Item key={i} eventKey={t}><span className="panel_type">{translate({lang: props.lang, info: t})}</span></Dropdown.Item>
                    })}
                </DropdownButton>
                </>}                
            </div>
            <div className="panel_box panel_type">
                <DropdownButton title={typeTitleDropdown ? typeTitleDropdown : translate({lang: lang, info: "type"})} id="panel_size_button" onSelect={handleDropdownType}>
                    {type_list.map(function(t, i){
                        return <Dropdown.Item key={i} eventKey={t}><span className="panel_type">{translate({lang: props.lang, info: t})}</span></Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
            <div className="panel_box panel_size">
                <DropdownButton title={sizeTitleDropdown ? sizeTitleDropdown : translate({lang: lang, info: "size"})} id="panel_size_button" onSelect={handleDropdownSize}>
                    {size_list.map(function(t, i){
                        return <Dropdown.Item key={i} eventKey={t}><span className="panel_dot_size">{t}</span></Dropdown.Item>
                    })}
                </DropdownButton>
            </div>
            <div className="panel_box panel_color">
                <DropdownButton title={colorTitleDropdown ? colorTitleDropdown : translate({lang: lang, info: "color"})} id="panel_size_button" onSelect={handleDropdownColor}>
                    {color_list.map(function(t, i){
                        return <Dropdown.Item key={i} eventKey={t}><span className={"panel_dot_color " + t}></span></Dropdown.Item>
                    })}
                </DropdownButton>                
            </div>
            <div className="panel_box panel_reviews">
                <DropdownButton title={scoreTitleDropdown ? scoreTitleDropdown : translate({lang: lang, info: "score"})} id="panel_size_button" onSelect={handleDropdownScore}>
                    {score_list.map(function(t, i){
                        return <Dropdown.Item key={i} eventKey={t}><Stars score={t}></Stars></Dropdown.Item>
                    })}
                </DropdownButton> 
            </div>
        </div>
    </div>
}

export default Panel