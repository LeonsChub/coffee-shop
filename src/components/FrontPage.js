import React from 'react';
import NavHeader from './NavHeader';
import ProductCarousel from './ProductCarousel';
import Button from 'react-bootstrap/Button';

function FrontPage() {
  return (
    <div>
      <NavHeader />
      <div className="main-content">
        <h1 className="main-title p-3 text-white">Home</h1>
        <ProductCarousel></ProductCarousel>
        <Button className="mt-3 shop-btn" size="lg">
          Shop NOW!
        </Button>
        <div className="footer p-2 mt-3 text-white" >©Leon Pavlenko 2022</div>
      </div>
    </div>
  );
}

export default FrontPage;
