import { createslice } from '@reduxjs/toollit'
export const counterslice = createslice({
    Name: 'counter',
    intialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        
    },

})

export const { increment, decrement } = counterslice.actions
export const selectcount = (state) => state.counter.value
export default counterslice.rdeucer