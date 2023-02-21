const currencyReducer = (state = 'RON', action) => {	
	switch(action.type){
		case "currency":						
			return action.info			
		default: 
			return state
	}
}
export default currencyReducer