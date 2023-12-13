import React from 'react'
import {useDispatch} from 'react-redux'
import Promo from './promo'
import Banner from './banner'

function Home(props) {
    const {home} = props
    let dispatch = useDispatch() 

    return <div id="home"> 
        <Banner {...props}></Banner>
        <Promo {...props}></Promo>
    </div>
}

export default Home