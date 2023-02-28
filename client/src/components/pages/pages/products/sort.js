import React from 'react'
import { useDispatch } from 'react-redux'
import { changeSort } from '../../../reducers/sort'
import { translate } from '../../../translate'

function Sort(props){
    let dispatch = useDispatch()	

    function handleClick(data){
        dispatch(changeSort(data))
    }

    return (
      <div className="sort_container">
        <div className="sort">
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{translate({lang: props.lang, info: "sort"})}</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li onClick={()=>{handleClick({'price': 'asc'})}}><span>{translate({lang: props.lang, info: "price_asc"})}</span></li>
                    <li onClick={()=>{handleClick({'price': 'desc'})}}><span>{translate({lang: props.lang, info: "price_desc"})}</span></li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Sort