// src/App.js
import React from 'react';
import { CartProvider } from './context/CartContext';  // Import CartProvider
import NavigationBar from './components/Navbar';  // Your Navbar component
import Home from './pages/Home';  // Your Home component
import Products from './pages/Products';  // Your Products page
import Cart from './components/Cart';  // Your Cart component
import Checkout from './components/Checkout';  // Your Checkout component
import Footer from './components/Footer';  // Your Footer component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // For routing

function App() {
  return (
    <CartProvider>  {/* Ensure CartProvider wraps the whole app */}
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
