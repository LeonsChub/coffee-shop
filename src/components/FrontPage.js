import React from 'react';
import ProductCarousel from './ProductCarousel';
import Button from 'react-bootstrap/Button';

function FrontPage() {
  return (
    <div>
      <div className="main-content">
        <h1 className="main-title p-3 text-white">Home</h1>
        <ProductCarousel></ProductCarousel>
        <Button className="my-3 shop-btn" size="lg">
          Shop NOW!
        </Button>
      </div>
    </div>
  );
}

export default FrontPage;
