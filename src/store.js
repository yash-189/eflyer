import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './features/items/itemSlice'

export default configureStore({
  reducer: {
    items: itemSlice,
  }
})