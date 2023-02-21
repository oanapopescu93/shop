import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import './css/font_roboto.css'
import 'font-awesome/css/font-awesome.min.css'
import './css/style.css'

import Page from './pages/page'
import NotFound from './pages/other_pages/not_found'
import Loader from './pages/partials/loader'

import socketIOClient from "socket.io-client/dist/socket.io"
import { getProductImages } from './utils'

const socket = socketIOClient("/")

let my_console = function(){
    let oldConsole = null
    let me = {}
    me.enable =  function enable(){
		if(oldConsole == null) return;
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

	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(null)	
	const [contact, setContact] = useState(null)	
	const [shipping, setShipping] = useState(null)	
	let lang = useSelector(state => state.language)
	let productImages = getProductImages()
  	const [categories, setCategories] = useState(null)	

  	useEffect(() => {
		let payload = null
		socket.emit('homepage_send', payload)
		socket.on('homepage_read', function(res){
			if(res){
				let array = res.products
				for(let i in array){
					for(let j in productImages){
						if(array[i].id === productImages[j].id){
							array[i].img = productImages[j].img
						}
					}
				}
				setData(array)
				setContact(res.contact)
        		setCategories(res.categories[0])
				setShipping(res.shipping)
        		setLoading(false) 
			}
		})
		setInterval(function () {		  
			socket.emit('heartbeat', { data: "ping" })
		}, 15000)
	}, [])	

	return <>
      {loading ? <Loader></Loader> : 
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
            <Page lang={lang} socket={socket} products={data} categories={categories} contact={contact} shipping={shipping}></Page>
          </Route>
          <Route path="*">
            <NotFound lang={lang}></NotFound>
          </Route>
          </Switch>			
        </BrowserRouter>
      }
	</>
}

export default App