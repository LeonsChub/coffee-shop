import React from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';


// eslint-disable-next-line react/prop-types
function ProductCard({ url }) {
  return( 
  <div className="product-card">
    <img id='card-image' src={url} alt="product image" />
    <h4 id='product-description'>Presto Italian Coffee</h4>
    <Button id='buy-btn' variant='success'><p>Add To cart</p> <span>+</span></Button>
  </div>);
}

export default ProductCard;
