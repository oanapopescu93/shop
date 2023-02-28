import React from 'react'
import {getStarArray } from '../../../utils'
import Product from './product'

function ProductList(props){
    return <>
        {							
            props.products.map(function(item, i){
                return <Product key={i} lang={props.lang} item={item} star_array={getStarArray(item.stars)}></Product>
            })
        }
    </>
}

export default ProductList


