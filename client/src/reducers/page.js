import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 'Home',
    selectedProduct: -1,
    selectedCategory: null,
    selectedSubcategory: null,
    selectedType: null,
    search: ''
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, { payload }) => {
            state.page = payload
        },
        changeSelectedProduct: (state, { payload }) => {
            state.selectedProduct = payload
        },
        changeSelectedCategory: (state, { payload }) => {
            state.selectedCategory = payload
        },
        changeSelectedSubcategory: (state, { payload }) => {
            state.selectedSubcategory = payload
        },
        changeSelectedType: (state, { payload }) => {
            state.selectedType = payload
        },
        changeSearch: (state, { payload }) => {
            state.search = payload
        },
        resetPage: () => initialState,
    }
})

export const {
    changePage,
    changeSelectedProduct,
    changeSelectedCategory,
    changeSelectedSubcategory,
    changeSelectedType,
    changeSearch,
    resetPage
} = pageSlice.actions

export default pageSlice.reducer