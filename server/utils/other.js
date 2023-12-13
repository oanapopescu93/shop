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
  	return array
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

module.exports = {
	sort_array_obj,
	get_device,
}