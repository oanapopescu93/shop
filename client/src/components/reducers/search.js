const searchReducer = (state = '', action) => {	
	switch(action.type){        
		case "search":
			return action.info
		default: 
			return state
	}
}
export default searchReducer