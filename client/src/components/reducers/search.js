import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, { payload }) => {
            state.search = payload
        },
    }
})

export const {
    changeSearch,
} = searchSlice.actions

export default searchSlice.reducer