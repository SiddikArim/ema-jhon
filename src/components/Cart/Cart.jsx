import React from 'react';
import './Cart.css'
// () er vitor {} use korar mane props er vitor er cart tare call
const Cart = ({cart}) => {
    // const {cart} =props;
    console.log(cart)
    let total =0;
    let totalShipping =0;
    let quantity = 0;
    for (const product of cart){
       //if condition used to set quantity
        // if(product.quantity===0){
        //     product.quantity=1
        // }
        //shortcut set quantity
        // product.quantity = product.quantity || 1;

        total=total + product.price * product.quantity; 
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Seleted Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <b><h5>Grand Total: ${grandTotal.toFixed(2)}</h5></b>
        </div>
    );
};

export default Cart;