import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'

import Band from './partials/band/band'
import Header from './partials/header'
import Navbar from './partials/navbar'
import Footer from './partials/footer'
import Cookies from './partials/cookies'

import {getCookie, setCookie, sortList} from '../utils'
import Products from './pages/products/products'
import Sign from './pages/sign/sign'
import ProductPage from './pages/product/productPage'
import CartPage from './pages/cart/cartPage'
import About from './other_pages/about'
import Contact from './other_pages/contact'
import Checkout from './pages/checkout/checkout'
import Homepage from './pages/home/homePage'
import WishPage from './pages/wish/wishPage'

function Page(props) {
  let page = useSelector(state => state.page)
  let cart = useSelector(state => state.cart)
  let filter = useSelector(state => state.filter)
  let sort = useSelector(state => state.sort)
  let search = useSelector(state => state.search)
  let wishlist = useSelector(state => state.wish)

  const [cookies, setCookies] = useState(getCookie("shop_cookies") === '' ? false : true)
  const [products, setProducts] = useState([])

  function shop_cookies(){
		setCookie("shop_cookies", true)
		setCookies(true)
	}

  useEffect(() => {
    if(search !== ''){      
      productsFromSearch(props.products)
    } else {
      productsFromFilter(props.products)
    }
	}, [page, filter, sort, search])

  function productsFromSearch(products){
    let array = products.filter(item => {
      let myItem = { ...item }
      if (myItem.title.toLowerCase().includes(search.toLowerCase())) {
        return myItem
      }
    })

    setProducts(array)
  }

  function productsFromFilter(products){
    let array = []
    let keys = Object.keys(filter)
    for(let i in keys){
      let attr = keys[i]
      let values = filter[keys[i]]   
      
      if(values && values.length>0){        
        array = products.filter(item => {
          let myItem = { ...item }
          if(values.includes(myItem[attr])){
            return myItem
          }          
        })
      } 
    }
    
    if(sort){
      let attr = Object.keys(sort)[0]
      let asc = true
      if(sort[attr] === "desc"){
        asc = false
      }
      array = sortList(array, attr, asc)
    }
    
    setProducts(array)
  }

	return (
    <>
      <Band lang={props.lang} contact={props.contact}></Band>
      <Header lang={props.lang}></Header>
      <Navbar lang={props.lang} category={props.categories}></Navbar>
      {(() => { 
        if(page){
          switch (page.name) {
            case "sign":
              return <Sign lang={props.lang} socket={props.socket}></Sign> 
            case "product":
              return <ProductPage lang={props.lang} socket={props.socket} products={props.products} product={page.details}></ProductPage>
            case "cart":
              return <CartPage cart={cart} lang={props.lang} socket={props.socket} shipping={props.shipping}></CartPage>
            case "wish":
              return <WishPage wishlist={wishlist} lang={props.lang}></WishPage>
            case "checkout":
              return <Checkout cart={cart} lang={props.lang} socket={props.socket} shipping={props.shipping}></Checkout>
            case "about":
              return <About lang={props.lang}></About>
            case "contact":
              return <Contact lang={props.lang}></Contact>
            case "products":
              return <Products lang={props.lang} products={products} categories={props.categories} filter={filter}></Products>
            case "home":
            default:
                return <Homepage lang={props.lang} promo_list={props.promo_list}></Homepage>
          }
        } else {
          return <Homepage lang={props.lang}></Homepage>
        }
      })()}      
      <Footer lang={props.lang}></Footer>
      {!cookies ? <Cookies shop_cookies={shop_cookies} lang={props.lang}></Cookies>  : null}
    </>
	)
}

export default Page