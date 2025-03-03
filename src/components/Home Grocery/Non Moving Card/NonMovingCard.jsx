import React from 'react';
import './style/NonMovingCard.css';
import './media queries/MediaQNonMovingCards.css';
import promotional_banner_img1 from '../image/promotional-banner-img1.png';
import promotional_banner_img2 from '../image/promotional-banner-img2.png';
import promotional_banner_img3 from '../image/promotional-banner-img3.png';
import promotional_banner_img4 from '../image/promotional-banner-img4.png';

const NonMovingCardData = [
    {
        Image: promotional_banner_img1,
        Title: "Everyday Fresh Meat",
        Button: "Shop Now",
        Icon: <i class="bi bi-arrow-right"></i>,
    },
    {
        Image: promotional_banner_img2,
        Title: "Daily Fresh Vegetables",
        Button: "Shop Now",
        Icon: <i class="bi bi-arrow-right"></i>,
    },
    {
        Image: promotional_banner_img3,
        Title: "Everyday Fresh Milk",
        Button: "Shop Now",
        Icon: <i class="bi bi-arrow-right"></i>,
    },
    {
        Image: promotional_banner_img4,
        Title: "Everyday Fresh Fruits",
        Button: "Shop Now",
        Icon: <i class="bi bi-arrow-right"></i>,
    },
]

export default function NonMovingCard() {


    return (
        <div className='nonMovingCardMain my-5'> 
           {/* inside container */}
           <div className="nonMovingContainerMain container-fluid d-flex ">
                <div className="row">
                    {
                        NonMovingCardData.map((item,index)=>{
                            return(
                                <div key={index} className={`col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 nonMovingCardContainer rounded-5 border-0 card d-flex flex-column justify-content-evenly
                                        ${index === 0 ? 'meat' : ''}
                                        ${index === 1 ? 'vegetables' : ''}
                                        ${index === 2 ? 'milk' : ''}
                                        ${index === 3 ? 'fruit' : ''}
                                    `}>
                                    {/* img div */}
                                    <div className="nonMovingImgContainer card-body p-0 d-flex justify-content-center align-items-center">
                                        <img src={item.Image} className='nonImg  card-img' alt="promotional_banner_img4" ></img>
                                    </div>
                                    {/* title div */}
                                    <div className='nonTitleDiv fs-4 fw-bolder'>
                                        <p className='nonTitleText'>{item.Title}</p>
                                    </div>
                                    {/* button div */}
                                    <div className='nonButtonDiv rounded-5'>
                                        <button type='button' className='nonButton bg-success fw-semibold px-3 py-2 rounded-5 border-0 text-white'>{item.Button}<span className='ms-2'>{item.Icon}</span></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
           </div>
        </div>
    )
}
