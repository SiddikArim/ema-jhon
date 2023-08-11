import React from 'react';
import './Cart.css'
// () er vitor {} use korar mane props er vitor er cart tare call
const Cart = ({cart}) => {
    // const {cart} =props;
    console.log(cart)
    let total =0;
    let totalShipping =0;
    for (const product of cart){
        total=total + product.price; 
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Seleted Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <b><h5>Grand Total: ${grandTotal}</h5></b>
        </div>
    );
};

export default Cart;