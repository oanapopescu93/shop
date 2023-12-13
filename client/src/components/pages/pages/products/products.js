import React from 'react'
import {useDispatch} from 'react-redux'

function Products(props) {
    const {home} = props
    let dispatch = useDispatch()
    console.log(home)       

    return <div id="products"> 
        products
    </div>
}

export default Products