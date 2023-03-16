import React, {useState} from 'react'
import {getStarArray } from '../../../utils'
import Product from './product'

function ProductList(props){
    let chunkSize = props.chunkSize ? props.chunkSize : 12
    const [page, setPage] = useState(0)
    const [pagePrev, setPagePrev] = useState('')
    const [pageNext, setPageNext] = useState('active')

    let products = []
    let numPages = 0
    for (let i = 0; i < props.products.length; i += chunkSize) {
        const chunk = props.products.slice(i, i + chunkSize)
        products.push(chunk)
        numPages++
    } 

    function prevPage(){
        let x = page
        if (x > 0) {
            x = x - 1
            setPage(x)
            if(x === 0){
                setPagePrev('')
                setPageNext('active')
            } else {
                setPagePrev('active')
                setPageNext('')
            }
        }
    }

    function nextPage(){
        let x = page
        if (x < numPages - 1) {
            x = x + 1
            setPage(x)
            if(x === numPages - 1){
                setPagePrev('active')
                setPageNext('')
            } else {
                setPagePrev('')
                setPageNext('active')
            }
        }
    }

    return <>
        {							
            products[page].map(function(item, i){
                return <Product key={i} lang={props.lang} currency={props.currency} rates={props.rates} item={item} star_array={getStarArray(item.stars)}></Product>
            })
        }
        <div className="paginationContainer">
            <button onClick={()=> prevPage()} className={"paginationButton " + pagePrev}>&lt;</button>
            <div className="paginationNumbers">
                {(() => {
                    switch (props.lang) {
                        case "ro":
                            return <p>{page+1} din {numPages}</p>
                        case "eng":
                        default:
                            return <p>{page+1} out of {numPages}</p>
                    }
                })()}
            </div>
            <button onClick={()=> nextPage()} className={"paginationButton " + pageNext}>&gt;</button>
        </div>
    </>
}

export default ProductList


