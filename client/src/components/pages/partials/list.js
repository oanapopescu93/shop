import React, {useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch } from 'react-redux'
import { cartRemove, cartRemoveAll, cartUpdate, wishRemove, wishRemoveAll } from '../../reducers/cartWishlist'
import { translate } from '../../translate'
import { changePage } from '../../reducers/page'

function Quantity(props){
    let item = props.item 
    const [qty, setQty] = useState(item.qty ? item.qty : 1)
    let x = item.qty ? item.qty : 1

    function increment(){
        let payload = {...item}
        if(qty < payload.qty_store){
            x = qty + 1
            setQty(x)
            payload.qty = x
            props.update(payload)
        }
    }
    function decrement(){
        let payload = {...item}
        if(qty > 1){
            x = qty - 1
            setQty(x)
            payload.qty = x
            props.update(item)
        }
    }

    return <div className="input-group list_quantity">
        <span>{translate({lang: props.lang, info: "qty"})}:&nbsp;</span>
        <div onClick={()=>{decrement()}} type="button" className="quantity-left-minus">-</div>
        <input type="text" id="quantity" value={qty} min="1" max={item.qty_store}/>    
        <div onClick={()=>{increment()}} type="button" className="quantity-right-plus">+</div>
    </div> 
}

function Size(props){
    let item = props.item 
    let size_list = item.size
    const [size, setSize] = useState(item.size_chosen ? item.size_chosen : size_list[0])

    function change(new_size){
        let payload = {...item}
        setSize(new_size)
        payload.size_chosen = new_size
        props.update(payload)
    }

    return <>
        {size ? <div className="input-group list_size">
            <span>{translate({lang: props.lang, info: "size"})}:&nbsp;</span>
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
    let item = props.item 
    let color_list = item.color
    const [color, setColor] = useState(item.color_chosen ? item.color_chosen : color_list[0])

    function change(new_color){
        let payload = {...item}
        setColor(new_color)
        payload.color_chosen = new_color
        props.update(payload)
    }

    return <>
        {color ? <div className="input-group list_color">
            <span>{translate({lang: props.lang, info: "color"})}:&nbsp;</span>
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
        {(() => {
            switch (props.lang) {
                case "ro":
                    return <h6 className="text_red">Economisesti {item.discount}%</h6>
                case "eng":
                default:
                    return <h6 className="text_red">You save {item.discount}%</h6>
            }
        })()}
        </div> : null}
    </div>
}

function List(props) {
    let dispatch = useDispatch()	  

    function updateProduct(item){
        dispatch(cartUpdate(item))
    }

    function removeProduct(item){
        switch(props.template){
            case "cart":				
                dispatch(cartRemove(item))
                break
            case "wishlist":
                dispatch(wishRemove(item))					
                break
        }      
    }

    function removeAll(){
        switch(props.template){
            case "cart":				
                dispatch(cartRemoveAll())
                break
            case "wishlist":	
                dispatch(wishRemoveAll())					
                break
        } 
    }

    function goBack(){
        dispatch(changePage({name: 'products'}))
    }

	return <>
        {							
            props.list.map(function(item, i){
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
                                        <h6><span>{translate({lang: props.lang, info: "product_code"})}</span><span>{item.id}</span></h6>  
                                        {props.template === "cart" ? <Quantity lang={props.lang} item={item} update={(e)=>{updateProduct(e)}}></Quantity> : null} 
                                        {props.template === "cart" ? <Size lang={props.lang} item={item} update={(e)=>{updateProduct(e)}}></Size> : null} 
                                        {props.template === "cart" ? <Color lang={props.lang} item={item} update={(e)=>{updateProduct(e)}}></Color> : null}        
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className="list_action">
                                        <div className="shop_button" onClick={()=>{removeProduct(item)}}><i className="fa fa-trash" aria-hidden="true"></i></div>
                                    </div>
                                    <Price lang={props.lang} item={item}></Price>
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
                        <span>{translate({lang: props.lang, info: "remove_all"})}</span>      
                    </div>
                    <div className="shop_button" onClick={()=>{goBack()}}>
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                        <span>{translate({lang: props.lang, info: "continue_shopping"})}</span>
                    </div>
                </div>
            </Col>
        </Row>
    </> 
}

export default List