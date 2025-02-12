import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar1 from './Home Grocery/Navbar1';
// import Navbar2 from './Home Grocery/Navbar2';
// import Navbar3 from './Home Grocery/Navbar3';
// import Carousel1 from './Home Grocery/Carousel1';
// import MovingCardReactSlick from './Home Grocery/MovingCardReactSlick';
// import NonMovingCard from './Home Grocery/NonMovingCard';
// import Flash from './Home Grocery/Flash';
// import BuyingItems from './Home Grocery/BuyingItems';
// import OffYourFirstOrder from './Home Grocery/OffYourFirstOrder';
// import RecommendedForYouEg1 from './Home Grocery/RecommendedForYouEg1';
// import FourCards from './Home Grocery/FourCards';
// import DontMissOutOnDeals from './Home Grocery/DontMissOutOnDeals';
// import Footer from './Home Grocery/Footer';
import Login from './LoginAndSignUp/Login';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                {/* <Navbar1/>
                <Navbar2/>
                <Navbar3/>
                <Carousel1/>
                <MovingCardReactSlick/>
                <NonMovingCard/>
                <Flash/>``
                <BuyingItems/>
                <OffYourFirstOrder/>
                <RecommendedForYouEg1/>
                <FourCards/>
                <DontMissOutOnDeals/>
                <Footer/> */}

                {/* login and signup */}
                <Login/>
                    <Routes>
                        <Route/>
                    </Routes>
            </BrowserRouter>
        </div>
    )
}
