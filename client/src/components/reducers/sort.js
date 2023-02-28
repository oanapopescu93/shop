import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sort: null
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        changeSort: (state, { payload }) => {
            state.sort = payload
        },
    }
})

export const {
    changeSort,
} = sortSlice.actions

export default sortSlice.reducer