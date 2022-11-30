import React from 'react';
import { useParams } from 'react-router-dom';

import PRODUCTS from '../data';

import './productPage.css'

function filterByName(product, name) {
  if (product.name === name) {
    return true;
  }
  return false;
}

function ProductPage() {
  const params = useParams();
  const [productToDom] = PRODUCTS.filter((product) => filterByName(product, params.name));

  return (
    <div id="product-content-wrap" className="d-flex align-items-center flex-column">
      <div className="split d-flex justify-content-center">
        <div className="product-img">
          <img src={productToDom.url} alt="" />
        </div>
        <div className="product-description">
          <h4 className='product-heading'> {productToDom.name}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos totam asperiores distinctio odit incidunt sit nesciunt, ex sed commodi.</p>

          <p>نزیکی لە موسڵمانی کوردستان و بۆ ھەڵدانەوەی چەند لوڕستان، و خەڵکانێکی چاخی ماوەیەک ئەویش جار دەشتەکانی کوردستان باری ساڵ بەمجۆرە 
          </p>

          <div className="cart-add-wrap">
          <button id="detract-from-cart">-</button>
          <p id="cart-amount">0</p>
          <button id="add-to-cart">+</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
