import { all } from 'redux-saga/effects'

import { raduRegister } from './radu'
import {homeRegister} from './home'

export default function* rootSaga() {
  yield all([
    homeRegister(),
    raduRegister(),
  ])
}
