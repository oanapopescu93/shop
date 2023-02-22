import React, {useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import { translate } from '../../../translate'
import { checkoutData } from '../../../utils'

function Checkout(props) {
    const [country, setCountry] = useState({value: "", text: ""})    
    const [countryBilling, setCountryBilling] = useState({value: "", text: ""})    
    const [month, setMonth] = useState({value: "", text: ""})    
    const [year, setYear] = useState("") 

    const [checkedBillingAddress, setCheckedBillingAddress] = useState(false) 
    const [radioOne, setRadioOne] = useState(true) 
    const [radioTwo, setRadioTwo] = useState(false)

    const countries = checkoutData().countries
    const monthOptions = checkoutData().monthOptions
    const yearOptions = checkoutData().yearOptions
    
    function submit(e){
        e.preventDefault()
        let formData = new FormData(e.target);
        let payload = Object.fromEntries(formData)
        console.log(payload)
    }   
    
    function validate(){
        
    }

    function changeCountry(x, billing=false){
        if(billing){
            setCountryBilling(x)
        } else {
            setCountry(x)
        }
    }
    function changeMonth(x){
        setMonth(x)
    }
    function changeYear(x){
        setYear(x)
    }
    function handleChangeCheck(x){
        switch(x){
            case "billing_info_same":				
                setCheckedBillingAddress(!checkedBillingAddress)
                break
            case "radio1":	
            case "radio2":	
                setRadioOne(!radioOne)			
                setRadioTwo(!radioTwo)
                break
        }  
    }

	return <Container fluid className="container_box checkout_container">
        <Row>
            <Col sm={8}>                
                <form id="checkout_form" onSubmit={(e)=>{submit(e)}}>
                    <Row>
                        <Col sm={12}>
                            <h3>{translate({lang: props.lang, info: "customer_info"})}</h3>  
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <label for="firstname">{translate({lang: props.lang, info: "firstname"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "firstname"})} id="firstname" name="firstname"/>
                            <div id="form_error_firstname" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={4}>
                            <label for="lastname">{translate({lang: props.lang, info: "lastname"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "lastname"})} id="lastname" name="lastname"/>
                            <div id="form_error_lastname" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={4}>
                            <label for="email">{translate({lang: props.lang, info: "email"})}</label>
                            <input type="email" className="form-control" placeholder={translate({lang: props.lang, info: "email"})} id="email" name="email"/>
                            <div id="form_error_email" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <label for="address">{translate({lang: props.lang, info: "address"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "address"})} id="address" name="address"/>
                            <div id="form_error_address" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={4}>
                            <label>{translate({lang: props.lang, info: "country"})}</label>
                            <div className="dropdown">
                                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>{country.text}</span>
                                </button>
                                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                    {countries.map(function(x, i){
                                        return <li key={i} onClick={()=>{changeCountry(x, false)}}><span>{x.text}</span></li>
                                    })}
                                </ul>
                            </div>
                            <div id="form_error_country" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <label for="town_city">{translate({lang: props.lang, info: "town_city"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "town_city"})} id="town_city" name="town_city"/>
                            <div id="form_error_town_city" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={5}>
                            <label for="county_state">{translate({lang: props.lang, info: "county_state"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "county_state"})} id="county_state" name="county_state"/>
                            <div id="form_error_county_state" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                        </Col>
                        <Col sm={2}>
                            <label for="postal_zip_code">{translate({lang: props.lang, info: "postal_zip_code"})}</label>
                            <input type="number" className="form-control" placeholder="00000" id="postal_zip_code" name="postal_zip_code"/>
                            <div id="form_error_postal_zip_code" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
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
                                            <input type="radio" name="radio1" checked={radioOne} onChange={()=>{handleChangeCheck("radio1")}}/>
                                            Test Gateway
                                        </label>
                                        <label>
                                            <input type="radio" name="radio2" checked={radioTwo} onChange={()=>{handleChangeCheck("radio2")}}/>
                                            Credit Card
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <label for="card_number">{translate({lang: props.lang, info: "card_number"})}</label>
                                    <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "card_number"})} id="card_number" name="card_number"/>
                                    <div id="form_error_card_number" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <label>{translate({lang: props.lang, info: "month"})}</label>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>{month.text ? <>{translate({lang: props.lang, info: month.text})}</> : <>{translate({lang: props.lang, info: "month"})}</>}</span>
                                        </button>
                                        <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                            {monthOptions.map(function(x, i){
                                                return <li key={i} onClick={()=>{changeMonth(x)}}><span>{x.text}</span></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div id="form_error_month" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                                </Col>
                                <Col sm={4}>
                                    <label>{translate({lang: props.lang, info: "month"})}</label>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>{year ? year : <>{translate({lang: props.lang, info: "year"})}</>}</span>
                                        </button>
                                        <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                            {yearOptions.map(function(x, i){
                                                return <li key={i} onClick={()=>{changeYear(x)}}><span>{x}</span></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div id="form_error_year" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                                </Col>
                                <Col sm={4}>
                                    <label for="cvv">{translate({lang: props.lang, info: "cvv"})}</label>
                                    <input type="number" className="form-control" placeholder={translate({lang: props.lang, info: "cvv"})} id="cvv" name="cvv"/>
                                    <div id="form_error_cvv" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
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
                            <div className="checkbox_radio_container">
                                <label>
                                    <input type="checkbox" name="checkbox" checked={checkedBillingAddress} onChange={()=>{handleChangeCheck("billing_info_same")}}/>
                                    {translate({lang: props.lang, info: "billing_info_same"})}
                                </label>
                            </div>
                        </Col>
                    </Row>
                    {!checkedBillingAddress ? <div id="billing_info_container">
                        <Row>
                            <Col sm={4}>
                                <label for="firstname_billing">{translate({lang: props.lang, info: "firstname"})}</label>
                                <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "firstname"})} id="firstname_billing" name="firstname_billing"/>
                                <div id="form_error_firstname_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                            <Col sm={4}>
                                <label for="lastname_billing">{translate({lang: props.lang, info: "lastname"})}</label>
                                <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "lastname"})} id="lastname_billing" name="lastname_billing"/>
                                <div id="form_error_lastname_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                            <Col sm={4}>
                                <label for="email_billing">{translate({lang: props.lang, info: "email"})}</label>
                                <input type="email" className="form-control" placeholder={translate({lang: props.lang, info: "email"})} id="email_billing" name="email_billing"/>
                                <div id="form_error_email_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={8}>
                                <label for="address_billing">{translate({lang: props.lang, info: "address"})}</label>
                                <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "address"})} id="address_billing" name="address_billing"/>
                                <div id="form_error_address_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                            <Col sm={4}>
                                <label>{translate({lang: props.lang, info: "country"})}</label>
                                <div className="dropdown">
                                    <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>{countryBilling.text}</span>
                                    </button>
                                    <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                        {countries.map(function(x, i){
                                            return <li key={i} onClick={()=>{changeCountry(x, true)}}><span>{x.text}</span></li>
                                        })}
                                    </ul>
                                </div>
                                <div id="form_error_country_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                        </Row>   
                        <Row>
                            <Col sm={5}>
                                <label for="town_city_billing">{translate({lang: props.lang, info: "town_city"})}</label>
                                <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "town_city"})} id="town_city_billing" name="town_city_billing"/>
                                <div id="form_error_town_city_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                            <Col sm={5}>
                                <label for="county_state_billing">{translate({lang: props.lang, info: "county_state"})}</label>
                                <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "county_state"})} id="county_state_billing" name="county_state_billing"/>
                                <div id="form_error_county_state_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                            <Col sm={2}>
                                <label for="postal_zip_code_billing">{translate({lang: props.lang, info: "postal_zip_code"})}</label>
                                <input type="number" className="form-control" placeholder="00000" id="postal_zip_code_billing" name="postal_zip_code_billing"/>
                                <div id="form_error_postal_zip_code_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div>
                            </Col>
                        </Row> 
                    </div> : null}
                    <Row>
                        <Col sm={12}>
                            <Button className="shop_button" type="submit">Submit</Button>
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