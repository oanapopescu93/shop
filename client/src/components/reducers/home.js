import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [], 
    categories: [], 
    contact: [], 
    shipping: [], 
    promo_products: [], 
    discount: false
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        bringPayload: () => {
            //console.log("bringThemAll!!!")
        },
        showPayload: (state, { payload }) => {
            state.products = payload.products
            state.categories = payload.categories
            state.contact = payload.contact
            state.shipping = payload.shipping
            state.promo_products = payload.promo_products
            state.discount = payload.discount
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