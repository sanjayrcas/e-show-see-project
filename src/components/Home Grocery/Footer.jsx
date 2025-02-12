import React from 'react';
import './style/Footer.css';
import './Media queries/MediaQFooter.css';
import E_Shop_See from './image/E-SHOP-see1 removebg-preview.png';
import { MapPin } from 'phosphor-react';
import { PhoneCall } from '@phosphor-icons/react';
import { Envelope } from '@phosphor-icons/react';
import FooterStoreImg1 from './image/store-img1.png';
import FooterStoreImg2 from './image/store-img2.png';
import { FacebookLogo } from 'phosphor-react';
import { TwitterLogo } from 'phosphor-react';
import { InstagramLogo } from 'phosphor-react';
import { LinkedinLogo } from 'phosphor-react';
import PaymentMethodImg from './image/payment-method.png';

export default function Footer() {
    return (
        <div className='footerMain mt-5'>
            <div className="footerMainContainer container-fluid">
                <div className="row">
                    <div className="footerCol col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
                        <div className="footerLogoContainer">
                            <img src={E_Shop_See} className='footerLogoImg' alt="E_Shop_See" />
                        </div>
                        <div className="footerInformation1">
                            <p className='footerInformationText'>We're Grocery Shop, an innovative team of food supliers.</p>
                            <p className='footerText'><MapPin className='footerIcons' size={20} color="#ffffff" weight="fill" />789 Inner Lane, Biyes park, California, USA</p>
                            <p className='footerText'><PhoneCall className='footerIcons' size={20} color="#ffffff" weight="fill" />+00 123 456 789 <span id='footerTextSpan1'>or</span><span id='footerTextSpan2'>+00 987 654 012</span></p>
                            <p className='footerText'><Envelope className='footerIcons' size={20} color="#ffffff" weight="fill" />support24@eshopsee.com</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                        <div className="footerInformation2">
                            <p className='fw-bold fs-5'>Information</p>
                            <p className='footerText1'>Become a Vendor</p>
                            <p className='footerText1'>Affiliate Program</p>
                            <p className='footerText1'>Privacy Policy</p>
                            <p className='footerText1'>Our Suppliers</p>
                            <p className='footerText1'>Extended Plan</p>
                            <p className='footerText1'>Community</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                        <div className="footerInformation3">
                            <p className='fw-bold fs-6 mt-lg-1'>Customer Support</p>
                            <p className='footerText1'>Help Center</p>
                            <p className='footerText1'>Contact Us</p>
                            <p className='footerText1'>Report Abuse</p>
                            <p className='footerText1'>Suvmit and Dispute</p>
                            <p className='footerText1'>Policies & Rules</p>
                            <p className='footerText1'>Online Shopping</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        <div className="footerInformation4">
                            <p className='fw-bold fs-5'>My Account</p>
                            <p className='footerText1'>My Account</p>
                            <p className='footerText1'>Order History</p>
                            <p className='footerText1'>Shoping Cart</p>
                            <p className='footerText1'>Compare</p>
                            <p className='footerText1'>Help Ticket</p>
                            <p className='footerText1'>Wishlist</p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-6 col-xl-2 col-xxl-2 m-xl-0 mt-sm-4 mt-md-0 mt-lg-4">
                        <div className="footerInformation5">
                            <p className='fw-bold fs-5'>Daily Grpceries</p>
                            <p className='footerText1'>Dairy & Eggs</p>
                            <p className='footerText1'>Meat & Seafood</p>
                            <p className='footerText1'>Breakast Food</p>
                            <p className='footerText1'>Household Supplies</p>
                            <p className='footerText1'>Bread & Bakery</p>
                            <p className='footerText1'>Pantry Staples</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 col-lg-6 col-xl-4 col-xxl-4 mt-4 mt-sm-4 mt-lg-4 mt-xl-4">
                        <div className="footerInformation6">
                            <p className='fs-5 fw-bold'>Shop on The Go</p>
                            <p className='footerText1'>E-Shop-see App is available. Get it now</p>
                        </div>
                        <div className="footerStoreImgContainer">
                            <img src={FooterStoreImg1} type='button' className='me-2' alt="FooterStoreImg1" />
                            <img src={FooterStoreImg2} type='button' alt="FooterStoreImg2" />
                        </div>
                        <div className="footerIconsListContainer mt-4">
                            <FacebookLogo type='button' className='footerSocialIcons me-3' size={20} weight="fill" />
                            <TwitterLogo type='button' className='footerSocialIcons me-3' size={20} weight="fill" />
                            <InstagramLogo type='button' className='footerSocialIcons me-3' size={20} weight="fill" />
                            <LinkedinLogo type='button' className='footerSocialIcons me-3' size={20} weight="fill" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="footerCopyRightsContainer px-2 d-flex flex-wrap justify-content-between">
                    <p className='footerCopyRightText'>E-Shop-See Clone eCommerce Website © 2024. All Rights Reserved</p>
                    <p>We Are Accepting<img src={PaymentMethodImg} className='ps-2' alt="PaymentMethodImg" /></p>
                </div>
        </div>
    )
}
