import React, { useEffect, useState } from "react";
import BannerCarousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <BannerCarousel />
      <Container className="mt-5">
        <h2 className="fw-bold mb-4 text-center">Man & Woman Fashion</h2>
        <Row>
          {products.map((product) => (
            <Col md={3} key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
