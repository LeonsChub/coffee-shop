/* eslint-disable react/prop-types */
import React from 'react';
function CheckoutItem(props) {
  const { amount, item } = props.orderData;

  return (
    <div id='checkout-item'>
        <div className="pic-wrap">
            <img src={item.url} alt="" className="item-pic" />
        </div>
        <div className="info-wrap d-flex flex-column justify-content-evenly">
            <div className="full-underline">
                <h5 className='item-title'>{item.name}</h5>
            </div>
            <p>Price: {item.price}$</p>
            <p>Units ordered: {amount}</p>
            <p>Type: {item.coffeeType}</p>
            <p id="total-item-cost" className='align-self-end'>
                Cost:{item.price * amount}$
            </p>
         </div>
        <div className="description"></div>
    </div>
  );
}

export default CheckoutItem;
