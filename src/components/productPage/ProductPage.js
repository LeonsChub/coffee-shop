/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { BsExclamationCircle as WarningSVG } from 'react-icons//bs';

import PRODUCTS from '../data';
import { ACTIONS } from '../RouteSwitch';

import './productPage.css';

function filterByName(product, name) {
  if (product.name === name) {
    return true;
  }
  return false;
}

const renderWarnOverlay = (props) => (
  <Tooltip id="button-tooltip" {...props} className="warn-overlay">
    Please enter an amount greater than 0.
  </Tooltip>
);

function ProductPage(props) {
  const dispatch = props.handleState;
  const [itemAmount, setItemAmount] = useState(0);

  const params = useParams();
  const [productData] = PRODUCTS.filter((product) => filterByName(product, params.name));
  const [warn, setWarn] = useState(false);

  const navigate = useNavigate();

  function conditionalRenderWarning() {
    if (warn) {
      return (
        <OverlayTrigger placement="top" delay={{ hide: 400 }} overlay={renderWarnOverlay}>
          <span id="warning">
            <WarningSVG className="" />
          </span>
        </OverlayTrigger>
      );
    } else {
      return null;
    }
  }

  return (
    <div id="product-content-wrap" className="d-flex align-items-center flex-column">
      <div className="split d-flex justify-content-center">
        <div className="product-img">
          <img src={productData.url} alt="" />
        </div>
        <div className="product-description">
          <h4 className="product-heading"> {productData.name}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos totam asperiores
            distinctio odit incidunt sit nesciunt, ex sed commodi.
          </p>

          <div className="cart-add-wrap">
            {conditionalRenderWarning()}

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
              variant="outline-success"
              className="text-light"
              onClick={() => {
                if (itemAmount > 0) {
                  dispatch({
                    type: ACTIONS.addItemsToCart,
                    payload: { amount: itemAmount, item: productData }
                  });
                  setItemAmount(0);
                  navigate(-1);
                } else {
                  setWarn(true);
                }
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
