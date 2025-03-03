import React from 'react';
import './style/EmptyCart.css';
import emptyCart from './image/icons8-empty-box.gif';

export default function EmptyCart() {
    return (
        <div className='emptyCartMain'>
            <div className="emptyCartMainContainer">
                <div className="emptyCartItems">
                    <p className='yourCartIsEmpty'>Your cart is empty</p>
                    <div className="emptyCartImgContainer">
                        <img src={emptyCart} className='emptyCartImg' alt="emptyCart" />
                    </div>
                    <button className='cartEmptyButton'>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}
