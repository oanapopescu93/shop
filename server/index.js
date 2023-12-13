const express = require("express")
const PORT = process.env.PORT || 2222
const app = express()

var http = require('http').createServer(app)
var io = require('socket.io')(http)

var routes = require("./routes")
app.use(routes) 

var coupons = require('./var/products').COUPONS
var contact = require('./var/constants').CONTACT

io.on('connection', function(socket) {
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

  socket.on('contact_send', function() {
		try{				
			io.to(socket.id).emit('contact_read', contact)
		}catch(e){
			console.log('[error]','contact_read--> ', e)
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

http.listen(PORT, () => {console.log(`Server listening on ${PORT}`)})