const wishReducer = (state = [], action) => {	
	let newItem = action.info

	switch(action.type){        
		case "wish_add":
			let itemExists = false
			const newState1 = state.map(item => {
				let myItem = { ...item }
				if(myItem.id === newItem.id && myItem.size_chosen === newItem.size_chosen && myItem.color_chosen === newItem.color_chosen){
					itemExists = true
					myItem.qty = item.qty + 1
				}
				return myItem
			})

			if (!itemExists){
				newItem.wish_id = newState1.length
				newState1.push(newItem)
			} 
			return newState1
		case "wish_update":	
			const newState2 = state.map(item => {
				let myItem = { ...item }
				if(myItem.wish_id === newItem.wish_id){
					myItem = item
				}
				return myItem
			})
			return newState2
		case "wish_remove":	
			const newState3 = state.filter(function(item) {
				let myItem = { ...item }
				if(myItem.wish_id !== newItem.wish_id){
					return myItem
				}
			})				
			return newState3	
		case "wish_remove_all":	
			return []		
		default: 
			return state
	}
}
export default wishReducer