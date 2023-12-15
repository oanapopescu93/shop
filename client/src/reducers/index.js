import {combineReducers} from 'redux'

import settingsReducer from './settings'
import pageReducer from './page'
import homeReducer from './home'
import popupReducer from './popup'
import cartWishlist from './cartWishlist'

const allReducers = combineReducers({	
	settings: settingsReducer,
	page: pageReducer,
	home: homeReducer,
	popup: popupReducer,
	cartWishlist: cartWishlist,
})

export default allReducers