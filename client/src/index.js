import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import rootReducer from './components/reducers'
import rootSaga from './components/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)

ReactDOM.render(  
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.getElementById('root')
)