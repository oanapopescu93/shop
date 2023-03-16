import { all } from 'redux-saga/effects'

import { raduRegister } from './radu'
import {homeRegister} from './home'
import { currencyRegister } from './currency'

export default function* rootSaga() {
  yield all([
    homeRegister(),
    currencyRegister(),
    raduRegister(),
  ])
}
