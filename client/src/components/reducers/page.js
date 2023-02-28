import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "home",
	details: null
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, { payload }) => {
            state.name = payload.name
			if(payload.details){
				state.details = payload.details
			}
        },
    }
})

export const {
    changePage,
} = pageSlice.actions

export default pageSlice.reducer