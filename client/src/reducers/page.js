import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 'Home',
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, { payload }) => {
            state.page = payload
        },
        resetPage: () => initialState,
    }
})

export const {
    changePage,
} = pageSlice.actions

export default pageSlice.reducer