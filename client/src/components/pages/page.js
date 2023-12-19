import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from '../popup/popup'
import Choice from './choice'
import {bringPayload} from '../../reducers/home'
import Loader from '../partials/loader'

function Page(props) {
    let home = useSelector(state => state.home)
    let cartWishList = useSelector(state => state.cartWishlist)
    let page = useSelector(state => state.page)
    let settings = useSelector(state => state.settings)
    let dispatch = useDispatch() 
    
    useEffect(() => {
		dispatch(bringPayload())
	}, [])       

    return <>
        {(() => {
            if(home.loaded){              
                return <>
                    <Choice {...props} settings={settings} page={page} home={home} cart={cartWishList.cart} wish={cartWishList.wishlist}></Choice>
                    <Popup {...props} settings={settings}></Popup>
                </>
            } else {
                return <Loader></Loader>
            }
        })()}
    </>
}

export default Page