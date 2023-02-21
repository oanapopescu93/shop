import React, {useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { isEmpty } from '../../../utils'
import { translate } from '../../../translate'

function Promo(props) {
    const [value, setValue] = useState('')
    const [coupon, setCoupon] = useState(null)

    function handleClick(){
        props.socket.emit('promo_send', value)
		props.socket.on('promo_read', function(res){
			setCoupon(res)
            props.updatePromo(res)
		})
    }

    function updateInputValue(e){
        setValue(e.target.value)
    }

	return <Row>
        <Col sm={12}>
            <div className="cart_promo">
                <h4>{translate({lang: props.lang, info: "promo_code"})}</h4>
                <form className="form-inline">
                    <input className="input_navbar" type="text" onChange={(e)=>{updateInputValue(e)}}/>
                    <button className="button_navbar button_color" type="button" onClick={(e)=>{handleClick(e)}}>
                        <span>{translate({lang: props.lang, info: "apply_coupon"})}</span>
                    </button>
                    {(() => { 
                        if(!isEmpty(coupon)){
                            if(coupon>0){
                                return <p className="alert alert-success">{props.lang === "ro" ? <span>Reducere de {coupon}%</span> : <span>{coupon}% discount</span>}</p>
                            } else {
                                return <p className="alert alert-danger">{props.lang === "ro" ? <span>Cuponul de reducere "{value}" nu este valid.</span> : <span>Your coupon "{value}" is not valid.</span>}</p>
                            }
                        } else {
                            return
                        }
                    })()}
                </form>
            </div>
        </Col>
    </Row>
}

export default Promo