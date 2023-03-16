import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sort: null,
    pagination: 12,
}

const productsPanelSlice = createSlice({
    name: 'productsPanel',
    initialState,
    reducers: {
        changeSort: (state, { payload }) => {
            state.sort = payload
        },
        changePagination: (state, { payload }) => {
            state.pagination = payload
        },
    }
})

export const {
    changeSort,
    changePagination,
} = productsPanelSlice.actions

export default productsPanelSlice.reducer