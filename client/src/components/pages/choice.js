import React from 'react'
import {useDispatch} from 'react-redux'
import Footer from '../partials/footer'
import Cookies from '../partials/cookies'
import { changeCookies } from '../../reducers/settings'
import Header from '../partials/header'
import NavbarComponent from '../partials/navbar'
import Home from './pages/home/home'
import About from './pages/about/about'
import Career from './pages/career/career'
import Contact from './pages/contact/contact'
import Policy from './pages/policy/policy'
import Terms from './pages/terms/terms'
import Questions from './pages/questions/questions'

function Choice(props) {
    const {page, settings} = props
    let dispatch = useDispatch()
    
    function handleCookiesClick(){
        dispatch(changeCookies())
    }    

    return <div id="page-container"> 
        <Header {...props}></Header>  
        <NavbarComponent {...props}></NavbarComponent>  
        {(() => {
            switch (page.page) { 
                case "About":
                    return <About {...props}></About>
                case "Terms":
                    return <Terms {...props}></Terms>
                case "Policy":
                    return <Policy {...props}></Policy>
                case "Questions":
                    return <Questions {...props}></Questions>
                case "Career":
                    return <Career {...props}></Career>
                case "Contact":
                    return <Contact {...props}></Contact>
                case "Home":                               
                default:
                    return <Home {...props}></Home>
            }
        })()}        
        {settings.cookies !== '1' ? <Cookies lang={settings.lang} cookiesClick={()=>handleCookiesClick()}></Cookies> : null}
        <Footer lang={settings.lang}></Footer>
    </div>
}

export default Choice