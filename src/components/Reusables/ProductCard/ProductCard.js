import React from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';


// eslint-disable-next-line react/prop-types
function ProductCard({ url }) {
  return( 
  <div className="product-card">
    <img id='card-image' src={url} alt="product image" />
    <h4 id='product-description'>Presto Italian Coffee</h4>
    <div className="buy-wrap d-flex justify-content-evenly align-items-center">
      <p className="price-wrap" >34.99$</p>
      <Button id='buy-btn'
              variant='success d-flex justify-content-between'>
          <p>Add To cart</p>
          <span>+</span>  
      </Button>
    </div>
    
  </div>);
}

export default ProductCard;
