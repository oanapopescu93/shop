import React from 'react'
import { useDispatch } from 'react-redux'
import { sort } from '../../../actions/actions'

function Sort(props){
    let lang = props.lang
    let dispatch = useDispatch()	

    function handleClick(data){
        dispatch(sort(data))
    }

    return (
      <div className="sort_container">
        <div className="sort">
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {lang === "ro" ? <span>Sorteaza</span> : <span>Sort</span>}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li onClick={()=>{handleClick({'price': 'asc'})}}>{lang === "ro" ? <span>Pret (crescator)</span> : <span>Price (ascendent)</span>}</li>
                    <li onClick={()=>{handleClick({'price': 'desc'})}}>{lang === "ro" ? <span>Pret (crescator)</span> : <span>Price (descendent)</span>}</li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Sort