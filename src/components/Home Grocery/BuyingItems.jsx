import React from 'react';
import './style/BuyingItems.css';
import './Media queries/MediaQBuyingItems.css';
import Vegetable1 from './image/product-img7.png';
import Vegetable2 from './image/product-img6.png';
import Vegetable3 from './image/product-img5.png';
import Vegetable4 from './image/product-img3.png';
import Vegetable5 from './image/product-img2.png';
import Vegetable6 from './image/product-img8.png';
import Vegetable7 from './image/product-img9.png';
import Vegetable8 from './image/product-img10.png';
import Vegetable9 from './image/product-img17.png';
import Vegetable10 from './image/product-img12.png';
import Vegetable11 from './image/product-img21.png';
import Vegetable12 from './image/product-img24.png';


export default function BuyingItems() {
    return (
        <div className='BuyingItemsMain my-5'>
            <div className="BuyingItemsMainContainer container-fluid">
                <div className="row buyingRow gap-2 d-flex justify-content-evenly justify-content-sm-evenly justify-content-md-evenly justify-content-lg-evenly justify-content-xl-evenly">
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable1} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable2} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable3} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable4} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable5} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable6} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable7} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable8} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable9} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable10} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable11} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card cardContainerBox mb-3">
                        <div className="imgContainerCard card-img text-center my-5">
                            <img src={Vegetable12} alt="Vegetable1" className='vegetable1 my-3' />
                            <button className='addCartBtn border-0 rounded-4 fw-bold px-3 py-2'>Add <i class="bi bi-cart4"></i></button>
                        </div>
                        <div className="card-body cardData mt-4 p-0">
                            <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                            <p className='ratings fw-bold text-secondary'>
                                4.8 
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="ms-1 bi bi-star-fill text-warning"></i>
                                <i class="mx-1 bi bi-star-half text-warning"></i>
                                (17k)
                            </p>
                            <p className='TaylorFarms card-title fw-bold'>Taylor Farms Broccoli Florets Vegetables</p>
                            <p className='ByLuckySupermarket fw-bold m-0 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <input type="range" className='inputRange mb-2'/>
                            <p className='soldData fw-bold card-text mb-3'>Sold: 18/35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
