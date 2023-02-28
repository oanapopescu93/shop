import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils'

const initialState = {
    lang: getCookie("shop_language") !== "" ? getCookie("shop_language") : "eng",
    currency: getCookie("shop_currency") !== "" ? getCookie("shop_currency") : "eur",
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
    }
})

export const {
    changeLanguage,
    changeCurrency
} = settingsSlice.actions

export default settingsSlice.reducer