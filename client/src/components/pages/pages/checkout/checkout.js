import React, {useState} from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/Button'
import { translate } from '../../../translate'
import { checkoutData, isEmpty } from '../../../utils'
import { check_submit, validateCard, validateCVV } from '../../../validate'

function Checkout(props) {
    const [country, setCountry] = useState("")    
    const [countryBilling, setCountryBilling] = useState("")    
    const [month, setMonth] = useState({value: "", text: ""})    
    const [year, setYear] = useState("") 
    const [city, setCity] = useState("")    
    const [cityBilling, setCityBilling] = useState("")   
    const [cityList, setCityList] = useState([])    
    const [cityListBilling, setCityListBilling] = useState([])   

    const [checkedBillingAddress, setCheckedBillingAddress] = useState(true) 
    const [radioOne, setRadioOne] = useState(true) 
    const [radioTwo, setRadioTwo] = useState(false)
    const [radioThree, setRadioThree] = useState(false)

    const countries_json = checkoutData().countries
    const countries = checkoutData().countries_list
    const monthOptions = checkoutData().monthOptions
    const yearOptions = checkoutData().yearOptions

    const [firstnameError, setFirstnameError] = useState(false)
    const [lastnameError, setLastnameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setAddressError] = useState(false)
    const [countryError, setCountryError] = useState(false)   
    const [cityError, setCityError] = useState(false)   
    const [postalZipCodeError, setPostalZipCodeError] = useState(false)
    const [cardNumberError, setCardNumberError] = useState(false)
    const [cvvError, setCvvError] = useState(false)
    const [monthError, setMonthError] = useState(false)   
    const [yearError, setYearError] = useState(false)     
    
    const [addressBillingError, setAddressBillingError] = useState(false)
    const [countryBillingError, setCountryBillingError] = useState(false)   
    const [cityBillingError, setCityBillingError] = useState(false)   
    const [postalZipCodeBillingError, setPostalZipCodeBillingError] = useState(false)
    
    function submit(e){
        refreshErrors()
        e.preventDefault()
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData)  
        validate(data)        
    }   
    
    function validate(data){
        let problem = false
        if(isEmpty(data.firstname)){
            setFirstnameError(true)
            problem = true
        }
        if(isEmpty(data.lastname)){
            setLastnameError(true)
            problem = true
        }
        if(isEmpty(data.phone)){
            setPhoneError(true)
            problem = true
        }
        if(!check_submit(data.email, "email")){
            setEmailError(true)
            problem = true
        }        
        if(isEmpty(data.address)){
            setAddressError(true)
            problem = true
        }    
        if(isEmpty(country)){
            setCountryError(true)
            problem = true
        }
        if(isEmpty(city)){
            setCityError(true)
            problem = true
        } 
        if(isEmpty(data.postal_zip_code)){
            setPostalZipCodeError(true)
            problem = true
        }
        if(!data.radio1){
            if(!validateCard(data.card_number)){
                setCardNumberError(true)
                problem = true
            }     
            if(!validateCVV(data.card_number, data.cvv)){
                setCvvError(true)
                problem = true
            }
            if(isEmpty(month.text)){
                setMonthError(true)
                problem = true
            }        
            if(isEmpty(year)){
                setYearError(true)
                problem = true
            }
        }
        
        if(!data.billing_info_same){                
            if(isEmpty(data.address_billing)){
                setAddressBillingError(true)
                problem = true
            }
            if(isEmpty(countryBilling)){
                setCountryBillingError (true)
                problem = true
            }
            if(isEmpty(cityBilling)){
                setCityBillingError(true)
                problem = true
            } 
            if(isEmpty(data.postal_zip_code_billing)){
                setPostalZipCodeBillingError(true)
                problem = true
            }   
        }

        if(!problem){
            let payload = data
            sendPayload(payload)
        }
    }
    function sendPayload(payload){
        console.log(payload)
    }

    function refreshErrors(){
        setFirstnameError(false)
        setLastnameError(false)
        setPhoneError(false)
        setEmailError(false)
        setAddressError(false)
        setCountryError(false)
        setCityError(false)
        setPostalZipCodeError(false)
        setCardNumberError(false)
        setCvvError(false)
        setMonthError(false)
        setYearError(false)        
        setAddressBillingError(false)
        setCountryBillingError(false)
        setCityBillingError(false)
        setPostalZipCodeBillingError(false)
    }   

    function changeCountry(x, billing=false){
        if(billing){
            setCountryBilling(x)
            setCityListBilling(countries_json[x])
        } else {
            setCountry(x)
            setCityList(countries_json[x])
        }
    }
    function changeCity(x, billing=false){
        if(billing){
            setCityBilling(x)
        } else {
            setCity(x)
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
            case "radio1":	
                setRadioOne(true)			
                setRadioTwo(false)
                setRadioThree(false)
                break
            case "radio2":	
                setRadioOne(false)			
                setRadioTwo(true)
                setRadioThree(false)
                break
            case "radio3":	
                setRadioOne(false)			
                setRadioTwo(false)
                setRadioThree(true)
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
                        <Col sm={3}>
                            <label htmlFor="firstname">{translate({lang: props.lang, info: "firstname"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "firstname"})} id="firstname" name="firstname"/>
                            {firstnameError ? <div id="form_error_firstname" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                        <Col sm={3}>
                            <label htmlFor="lastname">{translate({lang: props.lang, info: "lastname"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "lastname"})} id="lastname" name="lastname"/>
                            {lastnameError ? <div id="form_error_lastname" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                        <Col sm={3}>
                            <label htmlFor="phone">{translate({lang: props.lang, info: "phone"})}</label>
                            <input type="text" className="form-control" placeholder="+40712312312" id="phone" name="phone"/>
                            {phoneError ? <div id="form_error_phone" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                        <Col sm={3}>
                            <label htmlFor="email">{translate({lang: props.lang, info: "email"})}</label>
                            <input type="email" className="form-control" placeholder="text@text.text" id="email" name="email"/>
                            {emailError ? <div id="form_error_email" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <label htmlFor="address">{translate({lang: props.lang, info: "address"})}</label>
                            <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "address"})} id="address" name="address"/>
                            {addressError ? <div id="form_error_address" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                        <Col sm={3}>
                            <label>{translate({lang: props.lang, info: "country"})}</label>
                            <div className="dropdown">
                                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>{country}</span>
                                </button>
                                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                    {countries.map(function(x, i){
                                        return <li key={i} onClick={()=>{changeCountry(x, false)}}><span>{x}</span></li>
                                    })}
                                </ul>
                            </div>
                            {countryError ? <div id="form_error_country" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                        <Col sm={3}>
                            <label>{translate({lang: props.lang, info: "town_city"})}</label>
                            <div className="dropdown">
                                <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>{city}</span>
                                </button>
                                <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                    {cityList.map(function(x, i){
                                        return <li key={i} onClick={()=>{changeCity(x, false)}}><span>{x}</span></li>
                                    })}
                                </ul>
                            </div>
                            {cityError ? <div id="form_error_country" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                        </Col>
                        <Col sm={3}>
                            <label htmlFor="postal_zip_code">{translate({lang: props.lang, info: "postal_zip_code"})}</label>
                            <input type="text" className="form-control" placeholder="00000" id="postal_zip_code" name="postal_zip_code"/>
                            {postalZipCodeError ? <div id="form_error_postal_zip_code" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
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
                                            {translate({lang: props.lang, info: "cash_on_delivery"})}
                                        </label>
                                        <label>
                                            <input type="radio" name="radio2" checked={radioTwo} onChange={()=>{handleChangeCheck("radio2")}}/>
                                            {translate({lang: props.lang, info: "pay_card"})}
                                        </label>
                                        <label>
                                            <input type="radio" name="radio3" checked={radioThree} onChange={()=>{handleChangeCheck("radio3")}}/>
                                            Test Gateway
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            {!radioOne ? <>
                                <Row>
                                    <Col sm={12}>
                                        <label htmlFor="card_number">{translate({lang: props.lang, info: "card_number"})}</label>
                                        <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" id="card_number" name="card_number"/>
                                        {cardNumberError ? <div id="form_error_card_number" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
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
                                        {monthError ? <div id="form_error_month" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                                    </Col>
                                    <Col sm={4}>
                                        <label>{translate({lang: props.lang, info: "year"})}</label>
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
                                        {yearError ? <div id="form_error_year" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                                    </Col>
                                    <Col sm={4}>
                                        <label htmlFor="cvv">{translate({lang: props.lang, info: "cvv"})}</label>
                                        <input type="text" className="form-control" placeholder="123" id="cvv" name="cvv"/>
                                        {cvvError ? <div id="form_error_cvv" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                                    </Col>
                                </Row>
                            </> : null}                            
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
                                    <input type="checkbox" name="billing_info_same" checked={checkedBillingAddress} onChange={()=>{handleChangeCheck("billing_info_same")}}/>
                                    {translate({lang: props.lang, info: "billing_info_same"})}
                                </label>
                            </div>
                        </Col>
                    </Row>
                    {!checkedBillingAddress ? <div id="billing_info_container">
                        <Row>
                            <Col sm={3}>
                                <label htmlFor="address_billing">{translate({lang: props.lang, info: "address"})}</label>
                                <input type="text" className="form-control" placeholder={translate({lang: props.lang, info: "address"})} id="address_billing" name="address_billing"/>
                                {addressBillingError ? <div id="form_error_address_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                            </Col>
                            <Col sm={3}>
                                <label>{translate({lang: props.lang, info: "country"})}</label>
                                <div className="dropdown">
                                    <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>{countryBilling}</span>
                                    </button>
                                    <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                        {countries.map(function(x, i){
                                            return <li key={i} onClick={()=>{changeCountry(x, true)}}><span>{x}</span></li>
                                        })}
                                    </ul>
                                </div>
                                {countryBillingError ? <div id="form_error_country_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                            </Col>
                            <Col sm={3}>
                                <label>{translate({lang: props.lang, info: "town_city"})}</label>
                                <div className="dropdown">
                                    <button className="dropdown-toggle color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>{cityBilling}</span>
                                    </button>
                                    <ul className="dropdown-menu color" aria-labelledby="dropdownMenuButton">                
                                        {cityListBilling.map(function(x, i){
                                            return <li key={i} onClick={()=>{changeCity(x, true)}}><span>{x}</span></li>
                                        })}
                                    </ul>
                                </div>
                                {cityBillingError ? <div id="form_error_country" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
                            </Col>
                            <Col sm={3}>
                                <label htmlFor="postal_zip_code_billing">{translate({lang: props.lang, info: "postal_zip_code"})}</label>
                                <input type="number" className="form-control" placeholder="00000" id="postal_zip_code_billing" name="postal_zip_code_billing"/>
                                {postalZipCodeBillingError ? <div id="form_error_postal_zip_code_billing" className="form_error">{translate({lang: props.lang, info: "fill_field"})}</div> : null}
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
                <div>
                    
                </div>
            </Col>
        </Row> 
    </Container> 
}

export default Checkout