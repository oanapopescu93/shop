const initialFilter = {
	category: [],
	subcategory: [],
	type: [],
	size: [],
	color: [],
	stars: [],
}

const filterReducer = (state = initialFilter, action) => {
	let newFilter = action.info

	switch(action.type){
		case "filter": //this is for the navbar
			const newState1 = { ...state }			
			if(newFilter.category){
				newState1.category = [newFilter.category]
			}
			if(newFilter.subcategory){
				newState1.subcategory = [newFilter.subcategory]
			}
			if(newFilter.type){
				newState1.type = [newFilter.type]
			}
			if(newFilter.size){
				newState1.size = [newFilter.size]
			}
			if(newFilter.color){
				newState1.color = [newFilter.color]
			}
			if(newFilter.stars){
				newState1.stars = [newFilter.stars]
			}
			return newState1
		case "filter_add":
			const newState2 = { ...state }	
			if(newFilter.category){
				newState2.category.push(newFilter.category)
			}
			if(newFilter.subcategory){
				newState2.subcategory.push(newFilter.subcategory)
			}
			if(newFilter.type){
				newState2.type.push(newFilter.type)
			}
			if(newFilter.size){
				newState2.size.push(newFilter.size)
			}
			if(newFilter.color){
				newState2.color.push(newFilter.color)
			}
			if(newFilter.stars){
				newState2.stars.push(newFilter.stars)
			}
			return newState2
		case "filter_remove":	
			const newState3 = { ...state }		
			if(newFilter.category){
				newState3.category = []
			}
			if(newFilter.subcategory){
				newState3.subcategory = []
			}
			if(newFilter.type){
				newState3.type = []
			}
			if(newFilter.size){
				newState3.size = []
			}
			if(newFilter.color){
				newState3.color = []
			}
			if(newFilter.stars){
				newState3.stars = []
			}					
			return newState3
		default: 
			return state
	}
}
export default filterReducer