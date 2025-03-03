import React from 'react';
import './style/Flash.css';
import './media queries/MediaQFlash.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSettings from "react-slick";
import flashBgImg1 from '../image/flash-sale-bg1.png';
import flashBgImg2 from '../image/flash-sale-bg2.png';
import flashImg1 from '../image/flash-sale-img1.png';
import flashImg2 from '../image/flash-sale-img2.png';
import  Timer1 from '../Timer/Timer_1';

const flashList = [
    {
        bgImage: flashBgImg1,
        img: flashImg1,
        title: 'Fresh Vegetables',
        timer:  Timer1,
        button: "Show Now" ,
        Icon: <i class="bi bi-arrow-right"></i>,
    },
    {
        bgImage: flashBgImg2,
        img: flashImg2,
        title: 'Daily Snacks',
        timer: '',
        button: "Show Now" ,
        Icon: <i class="bi bi-arrow-right"></i>,
    }
]

export default function Flash() {
  let setting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // lg and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991, // md and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <div className='flashMainContainer my-5 '>
        <div className="flashContainerFluid mt-4 container-fluid ">
        <p className='FlashSalesToday fs-3 fw-bold'>Flash Sales Today</p>
            <SliderSettings {...setting}>
                {
                    flashList.map((item,index)=>{
                        return(
                            <div className='flashSalesContainer' key={index}>
                                <div className="flashBgContainer">
                                    <img src={item.bgImage} className='flashBgImage img-fluid position-absolute' alt="" />
                                    <div className="row position-absolute ">
                                        <div className="col flashImgContainer">
                                            <img src={item.img} className='flashImg' alt="" />
                                        </div>
                                        <div className="col flashDataContainer">
                                            <p className='flashTitle'>{item.title}</p>
                                            {/* timer */}
                                            <Timer1/>
                                            <button type='button' className='flashButton bg-success fw-semibold px-3 py-2 rounded-5 border-0 text-white'>{item.button}<span className='ms-2'>{item.Icon}</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </SliderSettings>
        </div>
    </div>
  )
}
