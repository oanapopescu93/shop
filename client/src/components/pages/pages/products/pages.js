import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

function Pages(props){
    let dispatch = useDispatch()	
    const [page, setPage] = useState(12)  
    let pages = [12, 24, 32, 64, 128]

    function change(x){
        setPage(x)
    }

    return (
        <div className="pages">
            <div className="dropdown">
                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{page}</span>
                </button>
                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                    {pages.map(function(x){
                        return <li key={x} onClick={()=>{change(x)}}><span>{x}</span></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Pages