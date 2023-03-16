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
            if(payload.category){
                const filter = state.category.find((item) => item === payload.category)
                if(!filter){
                    state.category.push(payload.category)
                }
            }
            if(payload.subcategory){
                const filter = state.subcategory.find((item) => item === payload.subcategory)
                if(!filter){
                    state.subcategory.push(payload.subcategory)
                }
            }
            if(payload.type){
                const filter = state.type.find((item) => item === payload.type)
                if(!filter){
                    state.type.push(payload.type)
                }
            }
            if(payload.size){
                const filter = state.size.find((item) => item === payload.size)
                if(!filter){
                    state.size.push(payload.size)
                }
            }
            if(payload.color){
                const filter = state.color.find((item) => item === payload.color)
                if(!filter){
                    state.color.push(payload.color)
                }
            }
            if(payload.stars){
                const filter = state.stars.find((item) => item === payload.stars)
                if(!filter){
                    state.stars.push(payload.stars)
                }
            }
        },
		filterRemove: (state, { payload }) => {
            if(payload.category){
                const removeItem = state.cart.filter(function(item){
                    console.log(item)
                })
            }
        },
    }
})

export const {
    filterAdd,
	filterRemove
} = filterSlice.actions

export default filterSlice.reducer