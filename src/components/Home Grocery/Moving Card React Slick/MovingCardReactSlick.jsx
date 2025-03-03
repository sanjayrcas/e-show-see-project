import React from 'react';
import './style/MovingCardReactSlick.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureImg1 from '../image/feature-img1.png';
import FeatureImg2 from '../image/feature-img2.png';
import FeatureImg3 from '../image/feature-img3.png';
import FeatureImg4 from '../image/feature-img4.png';
import FeatureImg5 from '../image/feature-img5.png';
import FeatureImg6 from '../image/feature-img6.png';
import FeatureImg7 from '../image/feature-img7.png';
import FeatureImgCopy2 from '../image/feature-img2.png';
import FeatureImg8 from '../image/feature-img8.png';
import FeatureImg9 from '../image/feature-img9.png';
import FeatureImg10 from '../image/feature-img10.png';
import { Link } from 'react-router-dom';


 // Data for sliding cards
 const CardData = [
    {
        image: FeatureImg1,
        title: 'Vegetables',
        text: '125+ Products',
    },
    {
        image: FeatureImg2,
        title: 'Fish & Meats',
        text: '125+ Products',
    },
    {
        image: FeatureImg3,
        title: 'Desserts',
        text: '125+ Products',
    },
    {
        image: FeatureImg4,
        title: 'Drinks & juice',
        text: '125+ Products',
    },
    {
        image: FeatureImg5,
        title: 'Animals Food',
        text: '125+ Products',
    },
    {
        image: FeatureImg6,
        title: 'Fresh Fruits',
        text: '125+ Products',
    },
    {
        image: FeatureImg7,
        title: 'Yummy Candy',
        text: '125+ Products',
    },
    {
        image: FeatureImgCopy2,
        title: 'Fish & Meats',
        text: '125+ Products',
    },
    {
        image: FeatureImg8,
        title: 'Dairy & Eggs',
        text: '125+ Products',
    },
    {
        image: FeatureImg9,
        title: 'Snacks',
        text: '125+ Products',
    },
    {
        image: FeatureImg10,
        title: 'Frozen Foods',
        text: '125+ Products',
    },
]
export default function MovingCardReactSlick() {
    
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 4000,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 424,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 359,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="sliderMain my-5">
        {/* inside container */}
        <div className="sliderContainerMain container-fluid">
            <Slider {...settings}>
                {
                    CardData.map((item,index)=>{
                        return(
                            <div className='sliderCardContainer d-flex flex-column align-items-center justify-content-evenly' key={index}>
                                {/* img div */}
                                <Link className='text-decoration-none'>
                                    <div className='sliderImageContainer rounded-circle d-flex justify-content-center align-items-center'>
                                        <img className='sliderImages' src={item.image} alt="products images" />
                                    </div>
                                </Link>
                                {/* title div */}
                                <Link className='text-decoration-none'>
                                    <div className='sliderTitleContainer text-dark fw-bold' style={{fontSize: "18px"}}>
                                        <p className='sliderNames'>{item.title}</p>
                                    </div>
                                {/* text div */}
                                </Link>
                                <div className='sliderTextContainer text-secondary' style={{fontSize: "15px"}}>
                                    <p className='sliderText'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
  )
}
