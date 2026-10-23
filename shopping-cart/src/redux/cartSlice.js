// Import Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Initial cart state
const initialState = {
  items: []
}

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  // Actions that can change the cart
  reducers: {

    // Add a product or increase its quantity
    addToCart: (state, action) => {
      const product = action.payload

      // Check if the product is already in the cart
      const existingItem = state.items.find(
        item => item.id === product.id
      )

      if (existingItem) {
        // Increase the quantity
        existingItem.quantity += 1
      } else {
        // Add the product with quantity 1
        state.items.push({
          ...product,
          quantity: 1
        })
      }
    },

    // Remove a product from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    },

    // Remove all products from the cart
    clearCart: (state) => {
      state.items = []
    }
  }
})

// Export the actions
export const {
  addToCart,
  removeFromCart,
  clearCart
} = cartSlice.actions

// Export the reducer
export default cartSlice.reducer