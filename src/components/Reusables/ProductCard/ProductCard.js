/* eslint-disable react/prop-types */
import React from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ProductCard(props) {
  let productUrl = props.name;
  productUrl = productUrl.replaceAll(' ', '%20');
  return (
    <div className="product-card h-100">
      <img id="card-image" src={props.url} alt="product image" />
      <h4 id="product-description">{props.name}</h4>
      <div className="buy-wrap d-flex justify-content-around align-items-center">
        <p className="price-wrap mt-2">{props.price}$</p>
        <Link to={`/Products/${productUrl}`} className="btn-link-card">
          <Button id="buy-btn" variant="success" className="w-100">
            <p>Buy</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
