import {combineReducers} from 'redux'

import languageReducer from './language'
import currencyReducer from './currency'
import filterReducer from './filter'
import pageReducer from './page'
import cartReducer from './cart'
import sortReducer from './sort'
import searchReducer from './search'
import wishReducer from './wishlist'

const allReducers = combineReducers({	
	language: languageReducer,
	currency: currencyReducer,
	filter: filterReducer,
	page: pageReducer,
	cart: cartReducer,
	wish: wishReducer,
	sort: sortReducer,
	search: searchReducer,
})

export default allReducers