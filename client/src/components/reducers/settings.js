import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils'

const initialState = {
    lang: getCookie("shop_language") !== "" ? getCookie("shop_language") : "ENG",
    currency: getCookie("shop_currency") !== "" ? getCookie("shop_currency") : "RON",
    rates: null,
}

const settingsSlice = createSlice({
    name: 'languageCurrency',
    initialState,
    reducers: {
        changeLanguage: (state, { payload }) => {
            state.lang = payload
            setCookie("shop_language", payload)
        },
        changeCurrency: (state, { payload }) => {
            state.currency = payload
            setCookie("shop_currency", payload)
        },
        addCurrency: () => {
            console.log("addCurrency")
        },
        showCurrency: (state, { payload }) => {
            state.rates = payload
        },
    }
})

export const {
    changeLanguage,
    changeCurrency,
    addCurrency,
    showCurrency,
} = settingsSlice.actions

export default settingsSlice.reducer