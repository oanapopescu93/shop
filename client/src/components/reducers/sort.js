const sortReducer = (state = null, action) => {	
	switch(action.type){        
		case "sort":
			return action.info
		default: 
			return state
	}
}
export default sortReducer