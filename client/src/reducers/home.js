import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    categories: [],
    contact: [],
    shipping: [],
    promo_products: [],
    career: [],
    currencies: [],   
    languages: [],  
    questions: [],
    loaded: false
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        bringPayload: () => {
            //console.log("bringThemAll!!!")
        },
        showPayload: (state, { payload }) => { 
            state.products = payload?.products
            state.categories = payload?.categories
            state.contact = payload?.contact
            state.shipping = payload?.shipping
            state.promo_products = payload?.promo_products   
            state.career = payload?.career  
            state.currencies = payload?.currencies           
            state.languages = payload?.languages        
            state.questions = payload?.questions 
            state.loaded = true   
        },
        resetHome: () => initialState,
    }
})

export const {
    bringPayload,
    showPayload,
    resetHome
} = homeSlice.actions

export default homeSlice.reducer