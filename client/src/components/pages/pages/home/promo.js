import React from 'react'
import {useDispatch} from 'react-redux'

function Promo(props) {
    const {home} = props
    let dispatch = useDispatch()
    let products = home.products
    let promo_products = home.promo_products
    let filer = products.filter((x)=>{
        return promo_products.includes(x.id)
    })
    console.log(products, promo_products, filer)       

    return <div id="promo"> 
        Promo
    </div>
}

export default Promo