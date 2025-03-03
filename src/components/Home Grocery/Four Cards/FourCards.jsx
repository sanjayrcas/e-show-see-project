import React from 'react';
import './style/FourCards.css';
import './media queries/MediaQFourCards.css';
import { CarProfile } from '@phosphor-icons/react';
import { HandHeart } from '@phosphor-icons/react';
import { CreditCard } from 'phosphor-react';
import { Chats } from '@phosphor-icons/react';

export default function FourCards() {
    return (
        <div className='fourCardsMain my-5'>
            <div className="fourCardsMainContainer container-fluid">
                <div className="row">
                    <div className="fourCardsCol mb-4 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 ">
                        <div className="fourCardsItemsContainer d-flex align-items-center gap-3">
                            <div className="fourCardsIconsContainer">
                                <CarProfile size={35} className='carProfile' color="#f7f7f7" weight="fill" />    
                            </div>
                            <div className="fourCardsTextDataContainer">
                                <p className='fourCardsCarTitle m-0 p-0'>Free Shipping</p>         
                                <p className='fourCardsCarText m-0 p-0'>Free Shipping all over the US</p>
                            </div>      
                        </div>       
                    </div>
                    <div className="fourCardsCol mb-4 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 ">
                        <div className="fourCardsItemsContainer d-flex align-items-center gap-3">
                            <div className="fourCardsIconsContainer">
                                <HandHeart size={35} className='handHeart'  color="#f7f7f7" weight="fill" />    
                            </div>
                            <div className="fourCardsTextDataContainer">
                                <p className='fourCardsCarTitle m-0 p-0'>100% Satisfaction</p>         
                                <p className='fourCardsCarText m-0 p-0'>Free Shipping all over the US</p>
                            </div>      
                        </div>       
                    </div>
                    <div className="fourCardsCol mb-4 col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 ">
                        <div className="fourCardsItemsContainer d-flex align-items-center gap-3">
                            <div className="fourCardsIconsContainer">
                                <CreditCard size={35} className='creditCard' color="#f7f7f7" weight="fill" />    
                            </div>
                            <div className="fourCardsTextDataContainer">
                                <p className='fourCardsCarTitle m-0 p-0'>Secure Payments</p>         
                                <p className='fourCardsCarText m-0 p-0'>Free Shipping all over the US</p>
                            </div>      
                        </div>       
                    </div>
                    <div className="fourCardsCol col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-3 ">
                        <div className="fourCardsItemsContainer d-flex align-items-center gap-3">
                            <div className="fourCardsIconsContainer">
                                <Chats size={35} className='chats' color="#f7f7f7" weight="fill" />    
                            </div>
                            <div className="fourCardsTextDataContainer">
                                <p className='fourCardsCarTitle m-0 p-0'>24/7 Support</p>         
                                <p className='fourCardsCarText m-0 p-0'>Free Shipping all over the US</p>
                            </div>      
                        </div>       
                    </div>
                </div>
            </div>
        </div>
    )
}
