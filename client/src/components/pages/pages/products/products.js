import React, {useState, useEffect} from 'react'
import List from './list'
import { translate } from '../../../../translations/translate'
import Panel from './panel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Products(props) {
    const {home} = props
    const [list, setList] = useState(home.products)
    const [loaded, setLoaded] = useState(false)
    const [buttonTop, setButtonTop] = useState(false)
    
    useEffect(() => {
		handleFilter()
		return () => {
			setList([])
		}  
	}, []) 

    function handleFilter(){
        setLoaded(true) 
    }

    useEffect(() => {
		if(window){
            const handleScroll = ()=>{
                window.pageYOffset > 300 ? setButtonTop(true) : setButtonTop(false)
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }  
        }
	}, []) 

    return <div className="products_container">
        {loaded ? <>
            {list && list.length>0 ? <>
                {buttonTop ? <div id="top"><FontAwesomeIcon icon={faArrowUp} /></div> : null}
                <Panel {...props}></Panel>
                <List list={list} {...props}></List>
            </> : <p>{translate({lang: props.lang, info: "no_products"})}</p>}
        </> : <p>{translate({lang: props.lang, info: "loading"})}</p>}
    </div>
}

export default Products