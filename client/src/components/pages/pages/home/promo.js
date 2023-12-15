import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Carousel from '../../../partials/carousel/carousel'
import { changePage, changeSelectedProduct } from '../../../../reducers/page'

function Child(props) {
    const {list, settings} = props
    let lang = settings.lang
    let dispatch = useDispatch()
    let carousel_options = {
        items: 4,
        nav: false,
        rewind: true,
        autoplay: false,
        slideBy: 1,
        dots: false,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:4
            },
        }
    }  
    
    function handleClick(id){
        dispatch(changePage('Product'))
        dispatch(changeSelectedProduct(id))
    }

    return <>
        {list && list.length>0 ? <div id="promo_list"> 
            <Carousel
                id="carouself_promo"
                template="promo"
                options={carousel_options}
                lang={lang}
                itemList={list}
                handleClick={(e)=>handleClick(e)}
            ></Carousel>
        </div> : null}
    </>
}

function Promo(props) {
    const {home} = props
    let products = home.products
    let promo_products = home.promo_products
    const [list, setList] = useState([])

    useEffect(() => {
        let filter = products.filter((x)=>{
            return promo_products.includes(x.id)
        })
        setList(filter)
	}, [])  

    return <div id="promo"> 
        <Child list={list} {...props}></Child>
    </div>
}

export default Promo