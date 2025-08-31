// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';  // Removed Form import
import ProductCard from './ProductCard';

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);  // Renamed to filteredProducts
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = {
    "Electronics": ["Smartphones", "Laptops", "Headphones", "Gaming Consoles"],
    "Fashion": ["Men's Fashion", "Women's Fashion"]
  };

  const fetchProducts = async (category, subcategory) => {
    let url = `http://localhost:5000/api/products?category=${category}`;
    if (subcategory) {
      url += `&subcategory=${subcategory}`;
    }
    const response = await fetch(url);
    const products = await response.json();
    setFilteredProducts(products);  // Use filteredProducts instead of products
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSubcategory('');
    fetchProducts(category, ''); // Fetch all products under the selected category
  };

  const handleSubcategoryClick = (subcategory) => {
    setSubcategory(subcategory);
    fetchProducts(category, subcategory); // Fetch products under the selected subcategory
  };

  useEffect(() => {
    if (category) {
      fetchProducts(category, subcategory);
    }
  }, [category, subcategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <h2 className="text-center mt-4 mb-4">Browse Our Products</h2>

      {/* Category Navigation */}
      <div>
        {Object.keys(categories).map((categoryName) => (
          <Button
            key={categoryName}
            variant="link"
            onClick={() => handleCategoryClick(categoryName)}
            style={{ fontSize: '1.5rem', marginRight: '20px' }}
          >
            {categoryName}
          </Button>
        ))}
      </div>

      {/* Subcategory Navigation based on selected category */}
      {category && (
        <div>
          {categories[category].map((subcat) => (
            <Button
              key={subcat}
              variant="link"
              onClick={() => handleSubcategoryClick(subcat)}
              style={{ fontSize: '1.2rem', marginRight: '20px' }}
            >
              {subcat}
            </Button>
          ))}
        </div>
      )}

      {/* Display products */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Col key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p>No products found for this category/subcategory.</p>
        )}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
          <Button key={index + 1} variant="link" onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
