import {combineReducers} from 'redux'

import settingsReducer from './settings'
import pageReducer from './page'
import homeReducer from './home'
import popupReducer from './popup'

const allReducers = combineReducers({	
	settings: settingsReducer,
	page: pageReducer,
	home: homeReducer,
	popup: popupReducer,
})

export default allReducers