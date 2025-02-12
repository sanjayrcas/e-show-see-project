import React from 'react';
import './style/OffYourFirstOrder.css';
import './Media queries/MediaQOffYourFirstOrder.css';
import OffYourFirstOrderBoxBg from './image/newsletter-bg.png';
import offerImg1 from './image/offer-img1.png';
import offerImg2 from './image/offer-img2.png';
import offerLogo from './image/offer-logo.png';

export default function OffYourFirstOrder() {
  return (
    <div className='OffYourFirstOrderMain my-5'>
        <div className="OffYourFirstOrderContainer container-fluid">
            <div className="row OffYourFirstOrderRow1  gap-2  d-flex justify-content-evenly justify-content-sm-evenly justify-content-md-evenly justify-content-lg-evenly justify-content-xl-evenly">
                {/* card 1 */}
                <div className="OffYourFirstOrderBox card p-0 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img src={OffYourFirstOrderBoxBg} className='OffYourFirstOrderBoxBg' alt="OffYourFirstOrderBoxBg" />
                    <div className="row OffYourFirstOrderRow2 mx-0 p-0 container-fluid">
                        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block col-lg-5 col-xl-5 OffYourFirstOrderContainer">
                            <img src={offerImg1} className='OffYourFirstOrderBackground1' alt="offerImg1" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 OffYourFirstOrderDataContainer">
                            <div className="offerLogoContainer">
                                <img src={offerLogo} alt="offerLogo" className='offerLogo' />   
                            </div>
                            <h3 className='offYourFirstOrderText1 fw-bold'>$5 off your first order</h3>
                            <p className='offYourFirstOrderText2 mb-2'>Delivery by 6:15am<span className='expiredAug5 ms-2'>expired Aug 5</span></p>
                            <button type='button' className='offYourFirstOrderButton fw-semibold px-3 py-2 rounded-5 border-0'>Show Now<span className='ms-2'><i class="bi bi-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
                {/* card - 2 */}
                <div className="OffYourFirstOrderBox card p-0 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img src={OffYourFirstOrderBoxBg} className='OffYourFirstOrderBoxBg' alt="OffYourFirstOrderBoxBg" />
                    <div className="row OffYourFirstOrderRow2 mx-0 p-0 container-fluid">
                        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-xl-5 OffYourFirstOrderContainer">
                            <img src={offerImg2} className='OffYourFirstOrderBackground2' alt="offerImg1" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 OffYourFirstOrderDataContainer">
                            <div className="offerLogoContainer">
                                <img src={offerLogo} alt="offerLogo" className='offerLogo' />   
                            </div>
                            <h3 className='offYourFirstOrderText1 fw-bold'>$5 off your first order</h3>
                            <p className='offYourFirstOrderText2 mb-2'>Delivery by 6:15am<span className='expiredAug5 ms-2'>expired Aug 5</span></p>
                            <button type='button' className='offYourFirstOrderButton fw-semibold px-3 py-2 rounded-5 border-0'>Show Now<span className='ms-2'><i class="bi bi-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
