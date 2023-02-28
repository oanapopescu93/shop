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
  let lang = useSelector(state => state.settings.lang)
  let currency = useSelector(state => state.settings.currency)
  let cart = useSelector(state => state.cartWishlist.cart)
  let filter = useSelector(state => state.filter)
  let sort = useSelector(state => state.sort.sort)
  let search = useSelector(state => state.search.search)
  let wishlist = useSelector(state => state.cartWishlist.wishlist)

  let home = props.home
  let categories = home.categories
  let contact = home.contact
  let shipping = home.shipping
  let productImages = props.productImages

  const [cookies, setCookies] = useState(getCookie("shop_cookies") === '' ? false : true)
  const [products, setProducts] = useState([])
  const [promoProducts, setPromoProducts] = useState([])

  function shop_cookies(){
		setCookie("shop_cookies", true)
		setCookies(true)
	}

  useEffect(() => {
    //add images to products
    let t = 0
    let array = home.products.map(function(item){
      let myItem = { ...item }
      t++
      if(!productImages[t]){
        t = 0
      }
      myItem.img = productImages[t].img
      return myItem
    })    
    setProducts(array)

    //create product list that needs to be promoted
    let arrayPromo = []
    for(let i in array){
      for(let j in home.promo_products){
        if(array[i].id === home.promo_products[j]){
          arrayPromo.push(array[i])
        }
      }
    }
    setPromoProducts(arrayPromo)
	}, [])

	return (
    <>
      <Band lang={lang} contact={contact}></Band>
      <Header lang={lang}></Header>
      <Navbar lang={lang} category={categories}></Navbar>
      {(() => { 
        if(page){
          // return <Sign lang={lang} currency={currency} socket={props.socket}></Sign> 
          switch (page.name) {
            case "sign":
              return <Sign lang={lang} socket={props.socket}></Sign> 
            case "product":
              return <ProductPage lang={lang} currency={currency} socket={props.socket} products={props.products} product={page.details}></ProductPage>
            case "cart":
              return <CartPage cart={cart} lang={lang} currency={currency} socket={props.socket} shipping={shipping}></CartPage>
            case "wish":
              return <WishPage wishlist={wishlist} lang={lang} currency={currency}></WishPage>
            case "checkout":
              return <Checkout cart={cart} lang={lang} currency={currency} socket={props.socket} shipping={shipping}></Checkout>
            case "about":
              return <About lang={lang}></About>
            case "contact":
              return <Contact lang={lang}></Contact>
            case "products":
              return <Products lang={lang} currency={currency} products={products} categories={categories} filter={filter}></Products>
            case "home":
            default:
                return <Homepage lang={lang} currency={currency} promo_list={promoProducts}></Homepage>
          }
        } else {
          return <Homepage lang={lang} currency={currency}></Homepage>
        }
      })()}      
      <Footer lang={lang} currency={currency}></Footer>
      {!cookies ? <Cookies shop_cookies={shop_cookies} lang={lang} currency={currency}></Cookies>  : null}
    </>
	)
}

export default Page