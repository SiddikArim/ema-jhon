/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import './Product.css'
const Product = (props) => {   
        return (
        <div className='product'>
           <img src={props.product?.img} alt="" />
           <div className='product-info'>
                <h6 className='product-name'>{props.product?.name}</h6>
                <p>Price: ${props.product?.price
                }</p>
                <p>Manufacturer: <b>{props.product?.seller}</b> </p>
                <p>Rating: {props.product?.ratings} stars</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;