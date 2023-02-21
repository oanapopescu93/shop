var express = require("express")
const app = express()

var http = require('http').createServer(app)
var io = require('socket.io')(http,{
    pingInterval: 10000,
    pingTimeout: 5000,
})
const port = process.env.PORT || 5222
app.set("port", port)

var contact = require('./var/constants').CONTACT
var products = require('./var/products').PRODUCTS
var categories = require('./var/products').CATEGORIES
var shipping = require('./var/products').SHIPPING
var promo_products = require('./var/products').PROMO_PRODUCTS
var coupons = require('./var/products').COUPONS
var routes = require("./routes")
app.use(routes) 

io.on('connection', function(socket){	
	socket.on('homepage_send', function() {
		let discount = false
		if(coupons && coupons.length>0){
			discount = true
		}
		try{				
			io.to(socket.id).emit('homepage_read', {products, categories, contact, shipping, promo_products, discount})
		}catch(e){
			console.log('[error]','homepage_read--> ', e)
		}
	})

	socket.on('promo_send', function(text) {
		let discount = null
		for(let i in coupons){
			if(coupons[i].name === text){
				discount = coupons[i].discount
				break
			}
		}
		try{				
			io.to(socket.id).emit('promo_read', discount)
		}catch(e){
			console.log('[error]','homepage_read--> ', e)
		}
	})

	socket.on('signin_send', function() {

	})

	socket.on('signup_send', function() {

	})

	socket.on('heartbeat', function(data) {
		console.log('heartbeat', data)
	})
})

http.listen(port, () => console.log("Server started on port " + app.get("port") + " on dirname " + __dirname))