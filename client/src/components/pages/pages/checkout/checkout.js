import React, {useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import { translate } from '../../../translate'

function Checkout(props) {
    const [country, setCountry] = useState({value: "", text: ""})    
    const [month, setMonth] = useState({value: "", text: ""})    
    const [year, setYear] = useState({value: "", text: ""})    
    const countries = [
        {value: "CA", text: "Canada"},
        {value: "MX", text: "Mexico"},
        {value: "US", text: "United States"}
    ]
    const monthOptions = [
        {value: 0, text: "January"},
        {value: 1, text: "February"},
        {value: 2, text: "March"},
        {value: 3, text: "April"},
        {value: 4, text: "May"},
        {value: 5, text: "June"},
        {value: 6, text: "July"},
        {value: 7, text: "August"},
        {value: 8, text: "September"},
        {value: 9, text: "October"},
        {value: 10, text: "November"},
        {value: 11, text: "December"},
    ]
    
    function submit(e){
        e.preventDefault()
        e.stopPropagation()
        var forms = document.getElementById('checkout_form')
        forms.classList.add('was-validated');
        console.log(e, forms)
    }

    function changeCountry(x){
        setCountry(x)
    }
    function changeMonth(x){
        setMonth(x)
    }
    function changeYear(x){
        setYear(x)
    }

	return <Container fluid className="container_box checkout_container">
        <Row>
            <Col sm={8}>                
                <form id="checkout_form">
                    <Row>
                        <Col sm={12}>
                            <h3>{translate({lang: props.lang, info: "customer_info"})}</h3>  
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <label for="firstname">{translate({lang: props.lang, info: "firstname"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "firstname"})} id="firstname" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={4}>
                            <label for="lastname">{translate({lang: props.lang, info: "lastname"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "lastname"})} id="lastname" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={4}>
                            <label for="email">{translate({lang: props.lang, info: "email"})}</label>
                            <input type="email" className="form-control" placeholder={translate({lang: props.lang, info: "email"})} id="email" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <label for="address">{translate({lang: props.lang, info: "address"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "address"})} id="address" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={4}>
                            <label>{translate({lang: props.lang, info: "country"})}</label>
                            <div className="dropdown">
                                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>{country.text}</span>
                                </button>
                                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                    {countries.map(function(x, i){
                                        return <li key={i} onClick={()=>{changeCountry(x)}}><span>{x.text}</span></li>
                                    })}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <label for="town_city">{translate({lang: props.lang, info: "town_city"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "town_city"})} id="town_city" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={5}>
                            <label for="county_state">{translate({lang: props.lang, info: "county_state"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "county_state"})} id="county_state" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={2}>
                            <label for="postal_zip_code">{translate({lang: props.lang, info: "postal_zip_code"})}</label>
                            <input type="number" className="form-control" placeholder="00000" id="postal_zip_code" required/>
                            <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h3>{translate({lang: props.lang, info: "payment_info"})}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <Row>
                                <Col sm={12}>
                                <div className="checkbox_radio_container">
                                        <label>
                                            <input type="radio" name="radio"/>
                                            Test Gateway
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" />
                                            Credit Card
                                        </label>
                                    </div>
                                    <div className="checkbox_radio_container">
                                        <label>
                                            <input type="checkbox" name="checkbox" />
                                            Test Gateway
                                        </label>
                                        <label>
                                            <input type="checkbox" name="checkbox"/>
                                            Credit Card
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <label for="card_number">{translate({lang: props.lang, info: "card_number"})}</label>
                                    <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "card_number"})} id="card_number" required/>
                                    <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <label>{translate({lang: props.lang, info: "month"})}</label>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>{translate({lang: props.lang, info: month.text})}</span>
                                        </button>
                                        <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                            {monthOptions.map(function(x, i){
                                                return <li key={i} onClick={()=>{changeMonth(x)}}><span>{x.text}</span></li>
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <label>{translate({lang: props.lang, info: "month"})}</label>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>{translate({lang: props.lang, info: month.text})}</span>
                                        </button>
                                        <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                            {monthOptions.map(function(x, i){
                                                return <li key={i} onClick={()=>{changeMonth(x)}}><span>{x.text}</span></li>
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <label for="cvv">{translate({lang: props.lang, info: "cvv"})}</label>
                                    <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "cvv"})} id="cvv" required/>
                                    <div className="invalid-feedback">{translate({lang: props.lang, info: "fill_field"})}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h3>{translate({lang: props.lang, info: "billing_info"})}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Button className="shop_button" type="button" onClick={(e)=>{submit(e)}}>Submit</Button>
                        </Col>
                    </Row>
                </form>
            </Col>
            <Col sm={4}>

            </Col>
        </Row> 
    </Container> 
}

export default Checkout