// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

// Create Cart Context
const CartContext = createContext();

// Initial state for the cart
const initialState = {
  cartItems: [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// CartProvider to wrap the app and provide cart state
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart custom hook to access cart state and dispatch
export const useCart = () => {
  return useContext(CartContext);
};
