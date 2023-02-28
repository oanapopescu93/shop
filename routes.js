var express = require("express")
var router = express.Router()
var contact = require('./var/constants').CONTACT
var products = require('./var/products').PRODUCTS
var categories = require('./var/products').CATEGORIES
var shipping = require('./var/products').SHIPPING
var promo_products = require('./var/products').PROMO_PRODUCTS
var coupons = require('./var/products').COUPONS

router.get('/api/products', function(req, res, next){
	let discount = false
	if(coupons && coupons.length>0){
		discount = true
	}
  	res.send({products, categories, contact, shipping, promo_products, discount})
});

module.exports = router