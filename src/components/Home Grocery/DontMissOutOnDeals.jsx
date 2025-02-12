import React from 'react';
import './style/DontMissOutOnDeals.css';
import './Media queries/MediaQDontMissOutOnDeals.css';
import NewsLetterbg from './image/newsletter-bg.png';
import NewsLetterImg from './image/newsletter-img.png';

export default function DontMissOutOnDeals() {
  return (
    <div className='dontMissMain my-5'>
        <div className="dontMissMainContainer container-fluid">
            <div className="dontMissDataContainer">
                <div className="dontMissBgContainer">
                    <img src={NewsLetterbg} className='dontMissBg img-fluid' alt="NewsLetterbg" />
                    <div className="row">
                        <div className="dontMissItemContainer col-xl-6">
                            <p className='dontMissTitle fw-bold text-white'>Don't Miss Out on Grocery Deals</p>
                            <h5 className='dontMissText text-white '>SING UP FOR THE UPDATE NEWSLETTER</h5>
                            <div className="dontMissInputContainer">
                                <input type="email" id='dontMissInput' placeholder='Your email address...' />
                                <button className='dontMissBtn'>Subscribe</button>
                            </div>
                        </div>
                        <div className="dontMissImgContainer col-xl-6 d-none col-xl-6 d-none d-lg-block">
                            <img src={NewsLetterImg} className='dontMissImg' alt="NewsLetterImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
