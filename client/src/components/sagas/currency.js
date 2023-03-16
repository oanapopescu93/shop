import { call, put, takeLatest } from "redux-saga/effects";
import { addCurrency, showCurrency } from "../reducers/settings";
import { getCurrency } from "../utils";

function request(){
    return api().then(function(res){
        return res
    })
}

function api(){
    return new Promise(function(resolve, reject){
        getCurrency().then(function(date){
            resolve(date)
        })
    })
}

function* fetchBringCurrency(){
    try{        
        const output = yield call(request)
        yield put(showCurrency(output.data.data))
    } catch(error){
        console.log('fetchBringThemAll1--> ', error)
    }   
}

export function* currencyRegister() {
    yield takeLatest(addCurrency.type, fetchBringCurrency)
}