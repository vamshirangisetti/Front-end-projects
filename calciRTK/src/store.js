import { configureStore } from '@reduxjs/toolkit'
import  updownReducer from './slices/updown'

export const store = configureStore({
  reducer: {
    updown: updownReducer,
  },
}) 