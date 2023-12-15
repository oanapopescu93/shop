import React from 'react'
import {useDispatch} from 'react-redux'
import { translate } from '../../../../translations/translate'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import ProductImage from './info/productImage'
import ProductDetails from './info/productDetails'
import ProductDescription from './tabs/productDescription'
import ProductAditionalInformation from './tabs/productTechnical'
import ProductReviews from './tabs/productReviews'
import {cartAdd, wishAdd} from '../../../../reducers/cartWishlist'

function Product(props) {
    const {home, page, settings} = props
    let selectedProduct = page.selectedProduct
    let products = home.products
    let product = products.filter((x)=>{
        return x.id === selectedProduct
    })
    let lang = settings.lang
    let dispatch = useDispatch()

    function handleChange(e){
        switch(e.choice){
            case 'cart':
                dispatch(cartAdd(e.customProduct))
                break
            case 'wishlist':
                dispatch(wishAdd(e.customProduct))
                break
            default:
        }
    }

    return <>
        {product && product[0] ? <Container>
            <Row>
                <Col lg={4} md={4} sm={6}>
                    <ProductImage image={null} lang={lang}></ProductImage>
                </Col>
                <Col lg={8} md={8} sm={6}>
                    <ProductDetails product={product[0]} lang={lang} handleChange={(e)=>handleChange(e)}></ProductDetails>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="product_more_info">
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title={translate({lang: lang, info: "description"})}>
                            <ProductDescription lang={lang} description={product[0].description_long}></ProductDescription>
                        </Tab>
                        <Tab eventKey="profile" title={translate({lang: lang, info: "aditional_info"})}>
                            <ProductAditionalInformation lang={lang}></ProductAditionalInformation>
                        </Tab>
                        <Tab eventKey="contact" title={translate({lang: lang, info: "reviews"})}>
                            <ProductReviews lang={lang}></ProductReviews>
                        </Tab>
                    </Tabs>
                </Col>				
			</Row>
        </Container> : <p className="text_center">{translate({lang: lang, info: "error"})}</p>}
    </>
}

export default Product