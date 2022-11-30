/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import PRODUCTS from '../data';
import { ACTIONS } from '../RouteSwitch';

import './productPage.css';

function filterByName(product, name) {
  if (product.name === name) {
    return true;
  }
  return false;
}

function ProductPage(props) {
  const handleAddCart = props.handleState;
  const [itemAmount, setItemAmount] = useState(0);

  const params = useParams();
  const [productToDom] = PRODUCTS.filter((product) => filterByName(product, params.name));

  // function handleCartAdding() {
  //   if (itemAmount > 0) {
  //     alert('added to cart');
  //   } else {
  //     alert('invalid item amount!');
  //   }
  // }

  return (
    <div id="product-content-wrap" className="d-flex align-items-center flex-column">
      <div className="split d-flex justify-content-center">
        <div className="product-img">
          <img src={productToDom.url} alt="" />
        </div>
        <div className="product-description">
          <h4 className="product-heading"> {productToDom.name}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos totam asperiores
            distinctio odit incidunt sit nesciunt, ex sed commodi.
          </p>

          <div className="cart-add-wrap">
            <button
              id="detract-from-cart"
              onClick={() => {
                if (itemAmount > 0) {
                  setItemAmount((p) => p - 1);
                }
              }}>
              -
            </button>
            <p id="cart-amount">{itemAmount}</p>
            <button
              id="add-to-cart"
              onClick={() => {
                setItemAmount((p) => p + 1);
              }}>
              +
            </button>

            <Button
              id="cart-btn"
              variant="outline-warning"
              className="text-light"
              onClick={() => {
                handleAddCart({ type: ACTIONS.addItemsToCart });
                setItemAmount(0);
              }}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
