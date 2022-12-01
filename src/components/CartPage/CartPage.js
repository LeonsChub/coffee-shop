/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import './cart.css'
import CheckoutItem from './CheckoutItem/CheckoutItem';
import { useNavigate } from 'react-router-dom';

import ACTIONS from '../RouteSwitch'

function CartPage(props) {
  // eslint-disable-next-line no-unused-vars
  const dispatch = props.handleState;
  const cartData = props.cartData;

  const navigate = useNavigate();

  const getTotalCost = props.cartData.reduce((orderTotal, current) => {
    orderTotal += current.amount * current.item.price;
    return orderTotal;
  }, 0);

  
  return (
    <section id="content">
        <div id='reciept' className='mt-3'>
            <h2 className='text-decoration-underline'>Your total is: {getTotalCost}$.</h2>
            {cartData.map((val,index)=>{
                return <CheckoutItem key={index} orderData ={val}>{val.item.name}</CheckoutItem>
            })}

            <div className="checkout-btn-wrap d-flex justify-content-end">
                <Button variant='danger'
                        className='mx-2'
                        onClick = {()=>{
                                        dispatch({type:ACTIONS.clearAllItems})
                                        navigate('/Shop');
                                        }}>
                            Clear Cart
                            </Button>
                <Button variant='success'>Checkout</Button>
            </div>

        </div>
    </section>
  );
}

export default CartPage;
