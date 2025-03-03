import React, { useRef } from 'react';
import './style/MovingCards1Copy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import featureImage1 from './image/feature-img1.png';
import featureImage2 from './image/feature-img2.png';
import featureImage3 from './image/feature-img3.png';
import featureImage4 from './image/feature-img4.png';
import featureImage5 from './image/feature-img5.png';
import featureImage6 from './image/feature-img6.png';
import featureImage7 from './image/feature-img7.png';
import featureImg2 from './image/feature-img2.png';
import featureImage8 from './image/feature-img8.png';
import featureImage9 from './image/feature-img9.png';
import featureImage10 from './image/feature-img10.png';
import { Link } from 'react-router-dom';

export default function MovingCards1Copy() {
    const scrollCards = useRef();
  

    // function handleLeft(){
    // const slides = Array.from(scrollCards.current.children);

    //     slides.forEach((item)=>{
    //         const clone = item.cloneNode(true);

    //         scrollCards.current.appendChild(clone)
    //     })

    //     scrollCards.current.scrollBy(-150,0);
    // }
    // function handleRight(){
    // const slides = Array.from(scrollCards.current.children);

    //     slides.forEach((item)=>{
    //         const clone = item.cloneNode(true);

    //         scrollCards.current.appendChild(clone)
    //     })

    //     scrollCards.current.scrollBy(150,0);
    // }

    function handleLeft(){
        const slides = Array.from(scrollCards.current.children);
        
        // Append a clone of the last item to simulate left scroll
        const clone = slides[slides.length - 1].cloneNode(true);
        scrollCards.current.insertBefore(clone, slides[0]);

        
        scrollCards.current.scrollBy(-250, 0);
    }
    
    function handleRight(){
        const slides = Array.from(scrollCards.current.children);
        
        // Append a clone of the first item to simulate right scroll
        const clone = slides[0].cloneNode(true);
        scrollCards.current.appendChild(clone);
        
        scrollCards.current.scrollBy(250, 0);
    }
    
    return (

    <div className="container-fluid">
        {/* Moving Cards Container */}
        <div 
            id='containerCard' 
            className="d-flex overflow-auto p-0" 
            ref={scrollCards} 
            style={{scrollBehavior: 'smooth'}}>

            {/* card 1 */}
            <div id='card' className="card mx-2" style={{minWidth: '200px', flexShrink: 0}}>
                {/* card link */}
                <Link className='card-link'>
                    {/* card image */}
                    <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
                        <img src={featureImage1} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
                    </div>          
                </Link>
                {/* card body */}
                <div className="card-body bg-success">
                    {/* card title link */}
                    <Link className='text-white text-decoration-none'>
                        {/* card title */}
                        <div id='cardtitle' className="card-title text-center fw-medium">
                            Vegetables
                        </div>
                    </Link>
                    {/* card text */}
                    <div id='cardText' className="card-text text-center">
                        125+ Products
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div id='card' className="card mx-2" style={{minWidth: '200px', flexShrink: 0}}>
                <Link className='card-link'>
                    <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
                        <img src={featureImage2} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
                    </div>
                </Link>
                <div className="card-body bg-success">
                    <Link className='text-white text-decoration-none'>
                        <div id='cardtitle' className="card-title text-center fw-medium">
                            Fish & Meats
                        </div>
                    </Link>
                    <div id='cardText' className="card-text text-center">
                        125+ Products
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div id='card' className="card mx-2" style={{minWidth: '200px', flexShrink: 0}}>
                <Link className='card-link'>
                    <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
                        <img src={featureImage3} id='featureImage' className='py-4 img-fluid' alt="feature Image1" />
                    </div>
                </Link>
                <div className="card-body bg-success">
                    <Link className='text-white text-decoration-none'>
                        <div id='cardtitle' className="card-title text-center fw-medium">
                            Desserts
                        </div>
                    </Link>
                    <div id='cardText' className="card-text text-center">
                        125+ Products
                    </div>
                </div>
            </div>

            {/* card 4 */}
            <div id='card' className="card mx-2" style={{minWidth: '200px', flexShrink: 0}}>
                <Link className='card-link'>
                    <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
                        <img src={featureImage4} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
                    </div>
                </Link>
                <div className="card-body bg-success">
                    <Link className='text-white text-decoration-none'>
                        <div id='cardtitle' className="card-title text-center fw-medium">
                            Drinks & Juice
                        </div>
                    </Link>
                    <div id='cardText' className="card-text text-center">
                        125+ Products
                    </div>
                </div>
            </div>

            {/* card 5 */}
            <div id='card' className="card mx-2" style={{minWidth: '200px', flexShrink: 0}}>
                <Link className='card-link'>
                    <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
                        <img src={featureImage5} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
                    </div>
                </Link>
                <div className="card-body bg-success">
                    <Link className='text-white text-decoration-none'>
                        <div id='cardtitle' className="card-title text-center fw-medium">
                            Animals Food
                        </div>
                    </Link>
                    <div id='cardText' className="card-text text-center">
                        125+ Products
                    </div>
                </div>
            </div>

        </div>

        {/* Navigation buttons */}
        <div className="text-center mt-3">
            <button 
                id='button1' 
                className="btn btn-danger" 
                onClick={handleLeft}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button 
                id='button2' 
                className="btn btn-danger ml-2" 
                onClick={handleRight}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    </div>
    )
}

// <div>
//     {/* Moving Cards Container */}
        //     <div id='containerCard' ref={scrollCards} className="container">
        //         {/* card 1 */}
        //         <div id='card' className="card">
        //             {/* card link */}
        //             <Link className='card-link'>
        //                 {/* card image1 */}
        //                 <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
        //                     <img src={featureImage1} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
        //                 </div>
        //             </Link>
        //             {/* card body */}
        //             <div className="card-body bg-success">
        //                 {/* card title link */}
        //                 <Link className='text-white text-decoration-none'>
        //                     {/* card title */}
        //                     <div id='cardtitle' className="card-title text-center fw-medium">
        //                         Vegetables
        //                     </div>
        //                 </Link>
        //                 {/* card text */}
        //                 <div id='cardText' className="card-text text-center">
        //                     125+ Products
        //                 </div>
        //             </div>
        //         </div>
        //         {/* card 2 */}
        //         <div id='card' className="card">
        //             {/* card link */}
        //             <Link className='card-link'>
        //                 {/* card image1 */}
        //                 <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
        //                     <img src={featureImage2} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
        //                 </div>
        //             </Link>
        //             {/* card body */}
        //             <div className="card-body bg-success">
        //                 {/* card title link */}
        //                 <Link className='text-white text-decoration-none'>
        //                     {/* card title */}
        //                     <div id='cardtitle' className="card-title text-center fw-medium">
        //                         Fish & Meats
        //                     </div>
        //                 </Link>
        //                 {/* card text */}
        //                 <div id='cardText' className="card-text text-center">
        //                     125+ Products
        //                 </div>
        //             </div>
        //         </div>
        //         {/* card 3 */}
        //         <div id='card' className="card">
        //             {/* card link */}
        //             <Link className='card-link'>
        //                 {/* card image1 */}
        //                 <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
        //                     <img src={featureImage3} id='featureImage' className='py-4 img-fluid' alt="feature Image1" />
        //                 </div>
        //             </Link>
        //             {/* card body */}
        //             <div className="card-body bg-success">
        //                 {/* card title link */}
        //                 <Link className='text-white text-decoration-none'>
        //                     {/* card title */}
        //                     <div id='cardtitle' className="card-title text-center fw-medium">
        //                         Desserts
        //                     </div>
        //                 </Link>
        //                 {/* card text */}
        //                 <div id='cardText' className="card-text text-center">
        //                     125+ Products
        //                 </div>
        //             </div>
        //         </div>
        //         {/* card 4 */}
        //         <div id='card' className="card">
        //             {/* card link */}
        //             <Link className='card-link'>
        //                 {/* card image1 */}
        //                 <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
        //                     <img src={featureImage4} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
        //                 </div>
        //             </Link>
        //             {/* card body */}
        //             <div className="card-body bg-success">
        //                 {/* card title link */}
        //                 <Link className='text-white text-decoration-none'>
        //                     {/* card title */}
        //                     <div id='cardtitle' className="card-title text-center fw-medium">
        //                         Drinks & Juice
        //                     </div>
        //                 </Link>
        //                 {/* card text */}
        //                 <div id='cardText' className="card-text text-center">
        //                     125+ Products
        //                 </div>
        //             </div>
        //         </div>
        //         {/* card 5 */}
        //         <div id='card' className="card">
        //             {/* card link */}
        //             <Link className='card-link'>
        //                 {/* card image1 */}
        //                 <div id='CardImage1' className="card-img bg-danger text-center overflow-hidden">
        //                     <img src={featureImage5} id='featureImage' className='py-4 img-fluid overflow-hidden' alt="feature Image1" />
        //                 </div>
        //             </Link>
        //             {/* card body */}
        //             <div className="card-body bg-success">
        //                 {/* card title link */}
        //                 <Link className='text-white text-decoration-none'>
        //                     {/* card title */}
        //                     <div id='cardtitle' className="card-title text-center fw-medium">
        //                         Animals Food
        //                     </div>
        //                 </Link>
        //                 {/* card text */}
        //                 <div id='cardText' className="card-text text-center">
        //                     125+ Products
        //                 </div>
        //             </div>
        //         </div>
               
        //     </div>
        //     <button id='button1' onClick={handleLeft}>right<FontAwesomeIcon icon={faAngleLeft} className='bg-danger' /></button>
        //     <button id='button2' onClick={handleRight}>left<FontAwesomeIcon icon={faAngleRight} className='bg-danger' /></button>
        // </div>
