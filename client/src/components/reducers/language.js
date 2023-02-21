const languageReducer = (state = 'eng', action) => {	
	switch(action.type){
		case "language":						
			return action.info			
		default: 
			return state
	}
}
export default languageReducer