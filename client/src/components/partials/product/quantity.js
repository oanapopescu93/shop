import React, {useState} from 'react'

function Quantity(props){
    let item = props.item 
    const [qty, setQty] = useState(item.qty ? item.qty : 1)
    let x = item.qty ? item.qty : 1

    function handleChageQuantity(t){
        let payload = {...item}
        let allow = false
        if((t === 1 && qty < payload.qty_store) || (t === -1 && qty > 1)){
            allow = true  
        }
        if(allow){
            x = qty + t
            setQty(x)
            payload.qty = x
            props.update(payload)
        }
    }

    return <div className="input-group list_quantity">
        <div onClick={()=>{handleChageQuantity(-1)}} type="button" className="quantity-left-minus">-</div>
        <input type="text" id="quantity" value={qty} min="1" max={item.qty_store} readOnly/>    
        <div onClick={()=>{handleChageQuantity(1)}} type="button" className="quantity-right-plus">+</div>
    </div> 
}

export default Quantity