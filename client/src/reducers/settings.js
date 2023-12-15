import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils/utils'

const initialState = {
    lang: getCookie("shop_language") !== "" ? getCookie("shop_language") : "ENG",
    currency: getCookie("shop_currency") !== "" ? getCookie("shop_currency") : "RON",
    cookies: getCookie("shop_cookies") !== "" ? getCookie("shop_cookies") : "0",
    language_array: ["ENG", "ES", "DE", "FR", "IT", "RO"],
    currency_array: ["USD", "EUR", "RON"]
}

const settingsSlice = createSlice({
    name: 'settings',
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
        changeCookies: (state) => {
            state.cookies = '1'
            setCookie("shop_cookies", '1')
        },
        resetSettings: () => initialState,
    }
})

export const {
    changeLanguage,
    changeCurrency,
    changeCookies,
    resetSettings
} = settingsSlice.actions

export default settingsSlice.reducer