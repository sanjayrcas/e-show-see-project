import React from 'react';
import './style/YourCart.css';

export default function YourCart() {
    return (
        <div className='yourCartMain'>
            <div className="yourCartMainContainer">
                <div className="yourCartTextContinueShopping">
                    <p className='YourCartText'>Your Cart</p>
                    <button className='yourCartButtonShopping'>Continue Shopping</button>
                </div>
                <hr />
                <div className="yourCartItemContainer ">
                    <div className="row yourCartItemRow">
                        <div className="col-8 yourCartProductsContainer">

                        </div>
                        <div className="col-4 yourCartPriceDetailsContainer ">
                            <div className="yourCartPriceDetailsMainContainer">
                                <p className='priceDetails'>PRICE DETAILS</p>
                                <div className="totalProductsContainer">
                                    <p className='priceOfTheProducts'>Price 
                                        <span className='totalItems'> (3 items)</span>
                                    </p>
                                    <p className='priceIs'>₹3,999</p>
                                </div>
                                <div className="totalProductsContainer">
                                    <p className='priceOfTheProducts'>Discount</p>
                                    <p className='priceIs'>- ₹2,291</p>
                                </div>
                                <div className="totalProductsContainer">
                                    <p className='priceOfTheProducts'>Platform Fee</p>
                                    <p className='priceIs'>₹3</p>
                                </div>
                                <div className="deliveryChargesContainer">
                                    <p className='deliveryCharges'>Delivery Charges</p>
                                    <p className='priceIs'>
                                        <span>₹70 </span>
                                        Free
                                    </p>
                                </div>

                                <div className='hrUnderDelivery'></div>

                                <div className="totalAmountContainer">
                                    <p className='amountOfTheProducts'>Total Amount</p>
                                    <p className='amountOfPriceIs'>₹1,711</p>
                                </div>

                                <div className='hrUnderDelivery'></div>
                                
                                <p className='youWillSave'>You will save ₹2,288 on this order</p>
                            </div>
                            
                            
                            <div className="safeAndSecurePaymentContainerText">
                                <i class="bi bi-shield-check shieldIcon"></i>
                                <p className='safePayment'>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
