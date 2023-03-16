import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import './css/font_roboto.css'
import 'font-awesome/css/font-awesome.min.css'
import './css/style.css'

import Page from './pages/page'
// import NotFound from './pages/other_pages/not_found'
import Loader from './pages/partials/loader'

import socketIOClient from "socket.io-client/dist/socket.io"
import { getProductImages } from './utils'
import { bringPayload, bringProducts, showProducts } from './reducers/home'
import { addCurrency } from './reducers/settings'

const socket = socketIOClient("/")

let my_console = function(){
    let oldConsole = null
    let me = {}
    me.enable =  function enable(){
		if(oldConsole === null) return;
		window['console']['log'] = oldConsole
		window['console']['warn'] = oldConsole
		window['console']['error'] = oldConsole
	};
    me.disable = function disable(){
		oldConsole = console.log;
		window['console']['log'] = function() {}
		window['console']['warn'] = function() {}
		window['console']['error'] = function() {}
	};
    return me
}()

function App(props){	
	//my_console.disable()
	let productImages = getProductImages()
	let dispatch = useDispatch()
	let home = useSelector(state => state.home)

  	useEffect(() => {
		dispatch(bringPayload())		
		// dispatch(addCurrency())
		setInterval(function () {		  
			socket.emit('heartbeat', { data: "ping" })
		}, 15000)
	}, [])	

	return <>
      {home.products && home.products.length==0 ? <Loader></Loader> : 
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
            <Page socket={socket} home={home} productImages={productImages}></Page>
          </Route>
          </Switch>			
        </BrowserRouter>
      }
	</>
}

export default App