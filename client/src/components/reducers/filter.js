import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	category: [],
	subcategory: [],
	type: [],
	size: [],
	color: [],
	stars: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterAdd: (state, { payload }) => {
            
        },
		filterRemove: (state, { payload }) => {
            
        },
    }
})

export const {
    filterAdd,
	filterRemove
} = filterSlice.actions

export default filterSlice.reducer