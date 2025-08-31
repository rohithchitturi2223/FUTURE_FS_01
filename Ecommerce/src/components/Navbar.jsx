// src/components/Navbar.jsx
import React from 'react';
import { useCart } from '../context/CartContext';  // Correct import of useCart

const Navbar = () => {
  const { state } = useCart();  // Correctly destructure state from useCart

  if (!state) {
    return <div>Loading...</div>;  // Handle case where state is undefined
  }

  return (
    <nav>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {state.cartItems.length}</p>  {/* Display the number of items in the cart */}
    </nav>
  );
};

export default Navbar;
