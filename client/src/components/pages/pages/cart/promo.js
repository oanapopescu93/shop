import React, {useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { isEmpty } from '../../../utils'

function Promo(props) {
    let lang = props.lang 
    let socket = props.socket
    const [value, setValue] = useState('')
    const [coupon, setCoupon] = useState(null)

    function handleClick(){
        socket.emit('promo_send', value)
		socket.on('promo_read', function(res){
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
                {lang === "ro" ? <h4>Coduri promotional</h4> : <h4>Promo code</h4>}
                <form className="form-inline">
                    <input className="input_navbar" type="text" onChange={(e)=>{updateInputValue(e)}}/>
                    <button className="button_navbar button_color" type="button" onClick={(e)=>{handleClick(e)}}>
                        {lang === "ro" ? <span>Aplica cupon</span> : <span>Aply coupon</span>}
                    </button>
                    {(() => { 
                        if(!isEmpty(coupon)){
                            if(coupon>0){
                                return <p className="alert alert-success">{lang === "ro" ? <span>Reducere de {coupon}%</span> : <span>{coupon}% discount</span>}</p>
                            } else {
                                return <p className="alert alert-danger">{lang === "ro" ? <span>Cuponul de reducere "{value}" nu este valid.</span> : <span>Your coupon "{value}" is not valid.</span>}</p>
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