import React from 'react'
import {useDispatch} from 'react-redux'
import { Breadcrumb } from 'react-bootstrap'
import { changePage, changeSelectedCategory, changeSelectedProduct, changeSelectedSubcategory } from '../../reducers/page'

function Breadcrumbs(props) {
    const {home, page} = props
    let dispatch = useDispatch()
    let selectedProduct = page.selectedProduct
    let products = home.products
    let product = products.filter((x)=>{
        return x.id === selectedProduct
    })
    
    function handleClick(x){
        dispatch(changePage("Products"))
        dispatch(changeSelectedProduct(-1))
        switch(x.choice){
            case "category":
                dispatch(changeSelectedCategory(x.text))
                break
            case "subcategory":
                dispatch(changeSelectedSubcategory(x.text))
                break
        }
    }

	return <>
        {product && product[0] ? <div className="breadcrumbs">        
            <Breadcrumb>
                <Breadcrumb.Item onClick={()=>{handleClick({choice: "category", text: product[0].category})}}>{product[0].category}</Breadcrumb.Item>
                <Breadcrumb.Item onClick={()=>{handleClick({choice: "subcategory", text: product[0].subcategory})}}>{product[0].subcategory}</Breadcrumb.Item>
                <Breadcrumb.Item active>{product[0].type}</Breadcrumb.Item>
            </Breadcrumb>
        </div> : null}
    </>
}

export default Breadcrumbs