import React from "react";
import { useCart } from "../context/CartContext";
import { Container, ListGroup, Button, Row, Col, Card } from "react-bootstrap";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item._id} className="d-flex justify-content-between align-items-center">
                <Row>
                  <Col xs={2}>
                    <img src={item.image || "https://via.placeholder.com/100"} alt={item.name} width="100" />
                  </Col>
                  <Col xs={6}>
                    <div>{item.name}</div>
                    <div className="text-muted">${item.price}</div>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col xs={4} className="text-end">
                    <Button variant="danger" size="sm" onClick={() => removeFromCart(item._id)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Cart Summary */}
          <Card className="mt-4">
            <Card.Body>
              <h5>Total: ${total}</h5>
              <Button variant="dark" onClick={clearCart} className="me-2">Clear Cart</Button>
              <Button variant="success" href="/checkout">Proceed to Checkout</Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </Container>
  );
};

export default Cart;
