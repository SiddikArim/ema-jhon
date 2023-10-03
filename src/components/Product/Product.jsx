/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    //onk sadhonar por destructur kora object gular kno tay kno data na thakle seta thakle show na thakle skip [props.product||{}]
    const { name, seller, ratings, price, img } = props.product || {}
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price
                }</p>
                <p>Manufacturer: <b>{seller}</b> </p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to cart    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;