const axios = require('axios')
var constants = require('../var/constants')

function sort_array_obj(array, sort_by){
	let sorted = false
	switch (typeof sort_by) {
		case 'string': // sort array of objects
			while (!sorted){
				sorted = true
				for(let i=0; i<array.length-1; i++){
					if (array[i][sort_by] > array[i+1][sort_by]) {
						let t = array[i+1]
						array[i+1] = array[i]
						array[i] = t
						sorted = false
					  }
				}
			}			
			break
		case 'undefined': // sort a simple array
			while (!sorted){
				sorted = true
				for(let i=0; i<array.length-1; i++){
					if (array[i] > array[i+1]) {
						let t = array[i+1]
						array[i+1] = array[i]
						array[i] = t
						sorted = false
					  }
				}
			}
			break			
	}
  	
}
function get_user_from_uuid(uuid, users_array){
	let user_found
	for(let i in users_array){
		if(users_array[i].uuid == uuid){
			user_found = users_array[i]									
			break
		}
	}
	return user_found
}
function get_device(headers){
	let device = 0 // 0 = computer, 1 = mobile, 2 = other
	if(headers){
		if(typeof headers["user-agent"] !== "undefined" || headers["user-agent"] !== "null" || headers["user-agent"] !== null || headers["user-agent"] !== ""){
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(headers["user-agent"]) ) {
				device = 1
			}
		} else {
			device = 2
		}
	}
	return device
}
function get_geolocation(apiKey) {
	return "https://api.ipgeolocation.io/ipgeo?apiKey=" + apiKey
}
function get_extra_data(){
	return new Promise(function(resolve, reject){
		let url = get_geolocation('3b154170258741fb81976e7f34d61938')
		axios.get(url).then(response => {
			resolve(response)	
		}).catch(error => {
			console.log('get_extra_data_error--> ', error)
			resolve(false)
		})
	})
}
function sendMail(payload){
	console.log('sendMail ', payload)
	var mailOptions = {
		from: 'youremail@gmail.com',
		to: constants.AUTH_FROM,
		subject: 'Sending Email using Node.js',
		text: 'That was easy!'
	}
}

module.exports = {
	sort_array_obj,
	get_user_from_uuid,
	get_device,
	get_extra_data,
	sendMail,
}