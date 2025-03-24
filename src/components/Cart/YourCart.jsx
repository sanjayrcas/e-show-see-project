import React from 'react';
import './style/YourCart.css';
import item1 from '../Home Grocery/image/product-img15.png'
import { Link } from 'react-router-dom';
import { Info, MinusCircle, PlusCircle } from 'phosphor-react';
import { LineVertical } from '@phosphor-icons/react';

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
                    <div className=" yourCartItemRow">
                        {/* col-1 item-1 */}
                        <div className=" yourCartProductsContainer">
                            <div className="list-cart-list-main">
                                <div className="row bg-info mx-3 my-4 border rounded-2">
                                    <div className="list-cart-item-1 col-2 bg-warning">
                                        <Link to={'#'}><img src={item1} alt="item1" className='list-cart-item-img img-fluid' /></Link>
                                        <div className="list-cart-item-inc-dec">
                                            <button className="list-cart-item-inc mt-3">
                                                <MinusCircle size={32} color="#d1d1d1" weight="thin" />
                                            </button>
                                            <div className="list-cart-item-quantity mt-3">
                                                <div className='list-cart-quantity'>
                                                    50
                                                </div>
                                            </div>
                                            <button className='list-cart-item-dec mt-3'>
                                                <PlusCircle size={32} color="#d1d1d1" weight="thin" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-5 bg-secondary list-cart-detail-container">
                                        <div className="list-cart-item-Details">
                                            <p className='m-0 mt-3'>Web Designing</p>
                                            <p className='m-0'>English, Paperback, Hirdesh Bhardwaj</p>
                                            <p className='m-0 mt-2'>Seller:Repro Books on Demand</p>
                                            <p className='m-0 mt-4'>
                                                <p className='d-inline-block'>₹350</p>
                                                <p className='d-inline-block mx-2 fw-semibold'>₹259</p>
                                                26% off 1 coupon applied 
                                                <Info size={18} color="#388e3c" weight="fill" className='ms-1' />
                                            </p>
                                            <p className='m-0 fw-bold'>SAVE FOR LATER <button className='list-cart-remove-btn ms-4 fw-bold'>REMOVE</button></p>
                                        </div>
                                    </div>
                                    <div className="col-5 bg-success">
                                        <div className="list-cart-Delivery-date-pinTop mt-3 me-4">
                                            <p className='delivery-by d-inline-block'>Delivery by 
                                                <p className='d-inline-block'>Thu Mar 27</p> {/*Dynamic change*/}
                                                <LineVertical size={20} className='list-cart-pipe-icon' />
                                                <p className='d-inline-block'>Free</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" yourCartProductsContainer">
                            <div className="list-cart-list-main">
                                <div className="row bg-info mx-3 my-4 border rounded-2">
                                    <div className="list-cart-item-1 col-2 bg-warning">
                                        <Link to={'#'}><img src={item1} alt="item1" className='list-cart-item-img img-fluid' /></Link>
                                        <div className="list-cart-item-inc-dec">
                                            <button className="list-cart-item-inc mt-3">
                                                <MinusCircle size={32} color="#d1d1d1" weight="thin" />
                                            </button>
                                            <div className="list-cart-item-quantity mt-3">
                                                <div className='list-cart-quantity'>
                                                    50
                                                </div>
                                            </div>
                                            <button className='list-cart-item-dec mt-3'>
                                                <PlusCircle size={32} color="#d1d1d1" weight="thin" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-5 bg-secondary list-cart-detail-container">
                                        <div className="list-cart-item-Details">
                                            <p className='m-0 mt-3'>Web Designing</p>
                                            <p className='m-0'>English, Paperback, Hirdesh Bhardwaj</p>
                                            <p className='m-0 mt-2'>Seller:Repro Books on Demand</p>
                                            <p className='m-0 mt-4'>
                                                <p className='d-inline-block'>₹350</p>
                                                <p className='d-inline-block mx-2 fw-semibold'>₹259</p>
                                                26% off 1 coupon applied 
                                                <Info size={18} color="#388e3c" weight="fill" className='ms-1' />
                                            </p>
                                            <p className='m-0 fw-bold'>SAVE FOR LATER <button className='list-cart-remove-btn ms-4 fw-bold'>REMOVE</button></p>
                                        </div>
                                    </div>
                                    <div className="col-5 bg-success">
                                        <div className="list-cart-Delivery-date-pinTop mt-3 me-4">
                                            <p className='delivery-by d-inline-block'>Delivery by 
                                                <p className='d-inline-block'>Thu Mar 27</p> {/*Dynamic change*/}
                                                <LineVertical size={20} className='list-cart-pipe-icon' />
                                                <p className='d-inline-block'>Free</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* col-1 item-1 */}
                        
                        {/* col-2 */}
                        <div className=" yourCartPriceDetailsContainer ">
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
