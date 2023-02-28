import {combineReducers} from 'redux'

import settingsReducer from './settings'
import filterReducer from './filter'
import pageReducer from './page'
import cartWishlistReducer from './cartWishlist'
import sortReducer from './sort'
import searchReducer from './search'
// import raduReducer from './radu'
import homeReducer from './home'

const allReducers = combineReducers({	
	settings: settingsReducer,
	filter: filterReducer,
	page: pageReducer,
	cartWishlist: cartWishlistReducer,
	sort: sortReducer,
	search: searchReducer,
	// radu: raduReducer,
	home: homeReducer,
})

export default allReducers