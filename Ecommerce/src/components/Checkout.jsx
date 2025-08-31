import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "Credit Card",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.address) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSuccess(true); // Simulate successful order placement

    // Optionally: Clear the cart after checkout
    clearCart();
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2>Checkout</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Order placed successfully!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            required
          >
            <option>Credit Card</option>
            <option>UPI</option>
            <option>Cash on Delivery</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
