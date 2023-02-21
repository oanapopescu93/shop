const pageReducer = (state = 'home', action) => {	
	switch(action.type){
		case "page":						
			return action.info			
		default: 
			return state
	}
}
export default pageReducer