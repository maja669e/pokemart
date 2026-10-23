// Import Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Initial profit
const initialState = {
  amount: 0
}

// Create the profit slice
const profitSlice = createSlice({
  name: 'profit',
  initialState,

  // Actions that change the profit
  reducers: {
    // Add profit from a candy sale
    sellCandy: (state) => {
      state.amount += 5
    },

    // Subtract the cost of candy supplies
    buySupplies: (state) => {
      state.amount -= 2
    }
  }
})

// Export the actions
export const { sellCandy, buySupplies } = profitSlice.actions

// Export the reducer
export default profitSlice.reducer