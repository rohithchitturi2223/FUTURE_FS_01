import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Form } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);  // Initially show all products
      });
  }, []);

  useEffect(() => {
    const result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        category ? product.category === category : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(result);
  }, [searchQuery, category, products]);

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4 text-center">All Products</h2>

      {/* Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-3"
      />

      {/* Category Filter */}
      <Form.Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-3"
      >
        <option value="">All Categories</option>
        <option value="Fashion">Fashion</option>
        <option value="Electronics">Electronics</option>
        <option value="Home">Home</option>
        {/* Add more categories as needed */}
      </Form.Select>

      <Row>
        {filteredProducts.map((product) => (
          <Col md={3} key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
