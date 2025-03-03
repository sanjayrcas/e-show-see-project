import React from 'react';
import './style/Carousel1.css';
import './media queries/MediaQCarousel1.css';
import carouselBanner1 from '../image/banner-img1.png';
import carouselBanner2 from '../image/banner-img3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons';

export default function Carousel1() {
    return (
        <div>
            <div className="mainContainer container-fluid">
                <div id="carouselExample" className="carousel slide carouselSlider1">
                    <div className="carousel-inner" id='carousel-inner'>
                        {/* carousel-item-1 */}
                        <div className="carousel-item active">
                            <div className="banner row">
                                <div className="left-box col-xl-7 col-lg-7 col-md-7 col-sm-6 col-12">
                                    <h1 id='Heading'>
                                        Daily Grocery Order and Get Express Delivery
                                    </h1>
                                    <button className='exploreShopBtn'>
                                        Explore Shop
                                        <i class="bi bi-cart ps-2"></i>
                                    </button>
                                </div>
                                <div className="right-box col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12">
                                    <img src={carouselBanner1} id='carouselBanner1' alt="" />
                                </div>
                            </div>
                        </div>
                        {/* carousel-item-2 */}
                        <div className="carousel-item">
                            <div className="banner row">
                                <div className="left-box col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                                    <h1 id='Heading'>
                                        Daily Grocery Order and  Get Express Delivery
                                    </h1>
                                    <button className='exploreShopBtn'>
                                        Explore Shop
                                        <i class="bi bi-cart ps-2"></i>
                                    </button>
                                </div>
                                <div className="right-box col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                                    <img src={carouselBanner2} id='carouselBanner2' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id='carousel-control-prev' className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </button>
                    <button id='carousel-control-next' className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                    <button id='faArrowsDownToLineBtn'>
                        <FontAwesomeIcon icon={faArrowsDownToLine} id='faArrowsDownToLine' />
                    </button>
                </div>
            </div>

        </div>
    )
}
