var express = require("express")
var bodyParser = require('body-parser')
var path = require("path")
var router = express.Router()
var nodemailer = require('nodemailer')

var contact = require('./var/constants').CONTACT
var products = require('./var/products').PRODUCTS
var categories = require('./var/products').CATEGORIES
var shipping = require('./var/products').SHIPPING
var promo_products = require('./var/products').PROMO_PRODUCTS
var questions = require('./var/questions').QUESTION_ARRAY
var career = require('./var/career').CAREER_ARRAY
var languages = require('./var/other').LANGUAGES
var currencies = require('./var/other').CURRENCIES
var coupons = require('./var/products').COUPONS

var jsonParser = bodyParser.json() 
router.use(express.static(path.resolve(__dirname, '../client/build')))
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

router.post('/api/home', function(req, res, next){
  res.send({products, categories, contact, shipping, promo_products, questions, career, languages, currencies})
})

module.exports = router