import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: 0,
}

export const updownSlice = createSlice({
  name: 'updown',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    take: (state, action) => {
      state.value += action.payload
    },
    reset: (state)=>{
      state.value = initialState.value
    }
  },
})

export const { increment, decrement, take, reset } = updownSlice.actions

export default updownSlice.reducer
