import React, {useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import {cartRemoveAll, cartUpdate, page, wishAdd, wishRemove, wishRemoveAll, wishUpdate} from '../../actions/actions'
import {cartRemove} from '../../actions/actions'
import { useDispatch } from 'react-redux'

function Quantity(props){
    let lang = props.lang  
    let item = props.item 
    const [qty, setQty] = useState(item.qty)
    let x = item.qty

    function increment(){
        if(qty < item.qty_store){
            x = qty + 1
            setQty(x)
            item.qty = x
            props.update(item)
        }
    }
    function decrement(){
        if(qty > 1){
            x = qty - 1
            setQty(x)
            item.qty = x
            props.update(item)
        }
    }

    return <div className="input-group list_quantity">
        {lang === "ro" ? <span>Cant:&nbsp;</span> : <span>Qty:&nbsp;</span>}
        <div onClick={()=>{decrement()}} type="button" className="quantity-left-minus">-</div>
        <input type="text" id="quantity" value={qty} min="1" max={item.qty_store}/>    
        <div onClick={()=>{increment()}} type="button" className="quantity-right-plus">+</div>
    </div> 
}

function Size(props){
    let lang = props.lang  
    let item = props.item 
    let size_list = item.size
    const [size, setSize] = useState(item.size_chosen)

    function change(new_size){
        setSize(new_size)
        item.size_chosen = new_size
        props.update(item)
    }

    return <>
        {size ? <div className="input-group list_size">
            {lang === "ro" ? <span>Marime:&nbsp;</span> : <span>Size:&nbsp;</span>}
            <div className="dropdown">
                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {size}
                </button>
                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                    {size_list.map(function(x, i){
                        return <li key={i} onClick={()=>{change(x)}}><span>{x}</span></li>
                    })}
                </ul>
            </div>
        </div> : null}
    </>
}

function Color(props){
    let lang = props.lang  
    let item = props.item 
    let color_list = item.color
    const [color, setColor] = useState(item.color_chosen)

    function change(new_color){
        setColor(new_color)
        item.color_chosen = new_color
        props.update(item)
    }

    return <>
        {color ? <div className="input-group list_color">
            {lang === "ro" ? <span>Culoare:&nbsp;</span> : <span>Color:&nbsp;</span>}
            <div className="dropdown">
                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {color}
                </button>
                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                    {color_list.map(function(x, i){
                        return <li key={i} onClick={()=>{change(x)}}><span>{x}</span></li>
                    })}
                </ul>
            </div>
        </div> : null}
    </>
}

function Price(props){
    let lang = props.lang  
    let item = props.item 
    let qty = item.qty ? item.qty : 1
    let price = item.price * qty
	let price_old = 0
	if(item.discount>0){
		price_old = price + price * item.discount/100
	}

    return <div className="list_price">
        <div className="product_prices">
            {price_old > 0 ? <>                  
                <span className="product_price_old">{price_old}</span>
                <span className="product_price_new">{price}</span>
            </> : <span className="product_price">{price}</span>}
        </div>
        {price_old > 0 ? <div className="product_discount">
            {lang === "ro" ? <h6 className="text_red">Economisesti {item.discount}%</h6> : <h6 className="text_red">You save {item.discount}%</h6>}
        </div> : null}
    </div>
}

function List(props) {
    let template = props.template
    let lang = props.lang  
    let list = props.list
    let dispatch = useDispatch()	  

    function updateProduct(item){
        dispatch(cartUpdate(item))
    }

    function removeProduct(item){
        switch(template){
            case "cart":				
                dispatch(cartRemove(item))
                break
            case "wishlist":
                dispatch(wishRemove(item))						
                break
        }      
    }

    function removeAll(){
        switch(template){
            case "cart":				
                dispatch(cartRemoveAll())
                break
            case "wishlist":	
                dispatch(wishRemoveAll())					
                break
        } 
    }

    function goBack(){
        dispatch(page({name: 'products'}))
    }

	return <>
        {							
            list.map(function(item, i){
                return <Row>
                    <Col sm={12}>
                        <div className="list_item">
                            <Row>
                                <Col sm={9}>
                                    <div className="list_image">
                                        <img src={item.img} alt="image"/>
                                    </div>
                                    <div className="list_info">
                                        <h4>{item.title}</h4>
                                        <h6>{lang === "ro" ? <span>Cod produs: </span> : <span>Product code: </span>}<span>{item.id}</span></h6>  
                                        {template === "cart" ? <Quantity lang={lang} item={item} update={(e)=>{updateProduct(e)}}></Quantity> : null} 
                                        {template === "cart" ? <Size lang={lang} item={item} update={(e)=>{updateProduct(e)}}></Size> : null} 
                                        {template === "cart" ? <Color lang={lang} item={item} update={(e)=>{updateProduct(e)}}></Color> : null}        
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="list_action">
                                        <div className="shop_button" onClick={()=>{removeProduct(item)}}><i className="fa fa-trash" aria-hidden="true"></i></div>
                                    </div>
                                    <Price lang={lang} item={item}></Price>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            })
        }
        <Row>
            <Col sm={12}>
                <div className="list_action_remove_all">
                    <div className="shop_button" onClick={()=>{removeAll()}}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        {lang === "ro" ? <span>Sterge Lista</span> : <span>Remove All</span>}          
                    </div>
                    <div className="shop_button" onClick={()=>{goBack()}}>
                        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                        {lang === "ro" ? <span>Continua cumparaturile</span> : <span>Continue shopping</span>}
                    </div>
                </div>
            </Col>
        </Row>
    </> 
}

export default List