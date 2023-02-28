import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
	wishlist: []
}

const cartWishlistSlice = createSlice({
    name: 'cartWishlist',
    initialState,
    reducers: {
        cartAdd: (state, { payload }) => {			
            const itemInCart = state.cart.find((item) => item.id === payload.id)
			if (itemInCart) {				
				itemInCart.qty = itemInCart.qty + payload.qty
			  } else {                
				state.cart.push({ ...payload, qty: payload.qty, cartId: state.cart.length })
			  }
        },
        cartUpdate: (state, { payload }) => {	
			const itemInCart = state.cart.find((item) => item.id === payload.id)
			if (itemInCart) {
				itemInCart.qty = payload.qty
				itemInCart.size_chosen = payload.size_chosen
				itemInCart.color_chosen = payload.color_chosen
			}
        },
        cartRemove: (state, { payload }) => {
            const removeItem = state.cart.filter((item) => item.id !== payload.id)
      		state.cart = removeItem
        },        
        cartRemoveAll: (state) => {
            state.cart = []
        },

        wishAdd: (state, { payload }) => {
            const itemInWishlist = state.wishlist.find((item) => item.id === payload.id)
			if (itemInWishlist) {				
				itemInWishlist.qty = itemInWishlist.qty + payload.qty
			  } else {
				state.wishlist.push({ ...payload, qty: payload.qty, wishId: state.wishlist.length })
			  }
        },
        wishRemove: (state, { payload }) => {
            const removeItem = state.wishlist.filter((item) => item.id !== payload.id)
      		state.wishlist = removeItem
        },
        wishRemoveAll: (state) => {
            state.wishlist = []
        },
    }
})

export const {
    cartAdd,
    cartUpdate,
    cartRemove,
    cartRemoveAll,
    wishAdd,
    wishRemove,
    wishRemoveAll,
} = cartWishlistSlice.actions

export default cartWishlistSlice.reducer