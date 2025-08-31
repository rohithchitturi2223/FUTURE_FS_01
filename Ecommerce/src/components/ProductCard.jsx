// src/components/ProductCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  return (
    <Card className="shadow-sm rounded" style={{ maxWidth: "320px", margin: "0 auto" }}>
      <Card.Img
        variant="top"
        src={product.image || "https://via.placeholder.com/300x200"}
        alt={product.name}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
