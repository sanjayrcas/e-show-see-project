import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar1 from '../components/Home Grocery/NavbarOne/Navbar1';
import Navbar2 from '../components/Home Grocery/NavbarTwo/Navbar2';
import Navbar3 from '../components/Home Grocery/NavbarThree/Navbar3';
import Carousel1 from '../components/Home Grocery/Carousel one/Carousel1';
import MovingCardReactSlick from '../components/Home Grocery/Moving Card React Slick/MovingCardReactSlick';
import NonMovingCard from '../components/Home Grocery/Non Moving Card/NonMovingCard';
import Flash from '../components/Home Grocery/Flash/Flash';
import BuyingItems from '../components/Home Grocery/Buying items/BuyingItems';
import OffYourFirstOrder from '../components/Home Grocery/Off Your First Order/OffYourFirstOrder';
import RecommendedForYouEg1 from '../components/Home Grocery/Recommended For You Eg One/RecommendedForYouEg1';
import FourCards from '../components/Home Grocery/Four Cards/FourCards';
import DontMissOutOnDeals from '../components/Home Grocery/Dont Miss Out On Deals/DontMissOutOnDeals';
import Footer from '../components/Home Grocery/Footer/Footer';
import Login from '../components/LoginAndSignUp/Login';
import SignUp from '../components/LoginAndSignUp/SignUp';
// import EmptyCart from '../components/Cart/EmptyCart';
import YourCart from '../components/Cart/YourCart';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                {/* <EmptyCart/> */}
                <Routes>    
                    <Route path='/' element={<Login/>}/>
                    <Route path='/createAccount' element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/YourCart' element={<YourCart/>}/>
                    <Route path='/home' element={
                        <div>
                            <Navbar1/>
                            <Navbar2/>
                            <Navbar3/>
                            <Carousel1 />
                            <MovingCardReactSlick />
                            <NonMovingCard />
                            <Flash />
                            <BuyingItems />
                            <OffYourFirstOrder />
                            <RecommendedForYouEg1 />
                            <FourCards />
                            <DontMissOutOnDeals />
                            <Footer />
                        </div>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
