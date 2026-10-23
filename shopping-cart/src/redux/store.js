// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'

// Import reducers
import cartReducer from './cartSlice'
import profitReducer from './profitSlice'

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    profit: profitReducer
  }
})

// Export the store
export default store