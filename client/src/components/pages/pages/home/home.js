import React from 'react'
import Promo from './promo'
import Banner from './banner'
import Category from './category'

function Home(props) {
    return <div id="home"> 
        <Banner {...props}></Banner>
        <Promo {...props}></Promo>
        <Category {...props}></Category>
    </div>
}

export default Home