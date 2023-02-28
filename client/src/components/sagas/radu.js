import { put, call, takeLatest, spawn, select } from 'redux-saga/effects'
import { addCounter,addCounterSuccess, addCounterError } from '../reducers/radu'


function request(x){
    return api(x).then(function(res){
        return { counter: 40 }
    })
}

function api(x){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(x)				
        }, 20);
        
    });
}

function* fetchAddCounter() {
    try {
    const counter = yield select(state => state.radu.counter)
    const output = yield call(request, counter)
    yield put(addCounterSuccess(output.counter))
    //console.log("output: ", output)
    } catch(error) {
        yield put(addCounterError(error))
    }
}

export function* raduRegister() {
    yield takeLatest(addCounter.type, fetchAddCounter)
}