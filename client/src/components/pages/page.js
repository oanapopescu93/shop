import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from '../popup/popup'
import Choice from './choice'
import {bringPayload} from '../../reducers/home'

function Page(props) {
    let home = useSelector(state => state.home)
    let page = useSelector(state => state.page)
    let settings = useSelector(state => state.settings)
    let dispatch = useDispatch() 
    
    useEffect(() => {
		dispatch(bringPayload())
	}, [])       

    return <>
        <Choice {...props} settings={settings} page={page} home={home}></Choice>
        <Popup {...props} settings={settings}></Popup>
    </>
}

export default Page