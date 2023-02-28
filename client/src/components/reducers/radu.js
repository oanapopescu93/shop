import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    text: "",
}

const raduSlice = createSlice({
    name: 'radu',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter++
        },
        addCounter: () => {
            console.log("addCounter")
        },
        addCounterSuccess: (state, { payload }) => {
            state.counter = payload
            state.text = "success"
        },
        addCounterError: (state, { payload }) => {
            state.text = "error"
        },
        resetCounter: () => initialState,
    }
})

export const {
    addCounter,
    incrementCounter,
    addCounterSuccess,
    addCounterError,
    resetCounter
} = raduSlice.actions

export default raduSlice.reducer