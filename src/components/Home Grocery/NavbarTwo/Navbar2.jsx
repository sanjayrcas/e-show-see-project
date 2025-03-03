import React from 'react';
import './style/Navbar2.css';
import './Media queries/MediaQNavbar2.css';
import { Link } from 'react-router-dom';
import E_Shop_See from '../image/E-SHOP-see1 removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Navbar2() {
    return (
        <div>
            {/* navbar2 */}
            <nav id='navbar2' className='navbar navbar-expand'>
                {/* navbar container */}
                <div id='navbarContainer' className="container">
                    {/* logo container */}
                    <div className="logo-container px-lg-5 px-md-5 px-sm-5 px-3">
                        <Link className=''>
                            {/* <img id='MarketProLogo' className='navbar-brand' src={MarketProLogo} alt="MarketPro Logo" /> */}
                            <img id='MarketProLogo' className='navbar-brand img-fluid' src={E_Shop_See} alt="MarketPro Logo" />
                        </Link>
                    </div>
                    {/* allCategories and search container */}
                    <div className="allCategoriesAndSearch">
                        {/* dropdown container- 1 */}
                        <button className="AllCategoriesBtn1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Categories
                            <FontAwesomeIcon icon={faAngleDown} id='faAngleDown'/>
                        </button>
                        {/* all cg Dropdown Container 2*/}
                        <div id='allCgDropdown' className="dropdown">
                                <ul id='dropdownMenuUl' className="dropdown-menu dropdownMenuUl">
                                    <li className='listBoxInput'><input type="text" className='listInput'  /></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">All Categories</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Grocery</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Break & Dairy</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Vegetables</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Milks and Dairies</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Pet Foods & Toy</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Breads & Bakery</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Fresh Seafood</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Fronzen Foods</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Noodles & Rice</Link></li>
                                    <li id='allCgList'><Link id='allCgLink' class="dropdown-item" href="#">Ice Cream</Link></li>
                                </ul>
                            </div>
                        {/* container for search for product */}
                        <div className="searchProductContainer">
                            {/* search input box */}
                            <input id='searchInputbox' type="text" placeholder='Search for a product or brand' />
                            {/* search icon container */}
                            <span className='searchIconContainer'>
                                {/* search icon link */}
                                <Link to='' className='faMagnifyingLink'>
                                {/* search icon */}
                                    <FontAwesomeIcon className='faMagnifyingGlass' icon={faMagnifyingGlass}/>
                                </Link>
                            </span>
                        </div>
                        {/* your location container */}
                        <div className="yourLocationContainer">
                            {/* your location icon */}
                                <FontAwesomeIcon icon={faLocationDot} id='faLocationIcons'/>
                            {/* span container */}
                            <span id='spanContainer-yourLocation'>
                                <span id='spanYourLocation'>Your Location</span>
                                    {/* dropdown container 2 */}
                                    {/* alabama btn */}
                                    <button className="alabamaBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Alabama
                                    </button>
                                    {/* alabama Dropdown Container 2*/}
                                    <div id='alabamaDropdownContainer' className="dropdown">
                                        <ul id='alabamaUL' className="dropdown-menu">
                                        <li className='listBoxInput'><input type="text" className='listInput'  /></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">All Categories</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Grocery</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Break & Dairy</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Vegetables</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Milks and Dairies</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Pet Foods & Toy</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Breads & Bakery</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Fresh Seafood</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Fronzen Foods</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Noodles & Rice</Link></li>
                                            <li id='alabamaLI'><Link id='alabamaLink' class="dropdown-item" href="#">Ice Cream</Link></li>
                                        </ul>
                                    </div>
                            </span>
                            {/* angle down icon for your location div */}
                            <FontAwesomeIcon icon={faAngleDown} className="faAngleDownBtnIcon" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#a09eb0'}}/>
                        </div>
                    </div>
                    {/* wishlist and cart container */}
                    <div className="wishlistAndCartContainer">
                        <span className='spanCount1'>1</span>
                        <li id='wishlistList' className='list-unstyled'>
                            <Link id='wishlistLink' className='text-decoration-none'>
                                {/* heart icon */}
                                <i class="bi bi-heart" id='wishlistIcon'></i>
                                Wishlist
                            </Link>
                        </li>
                        <span className='spanCount2'>2</span>
                        <li id='cartList' className='list-unstyled'>
                            <Link to={'/YourCart'} id='cartLink' className='text-decoration-none'>
                                {/* cart icon */}
                                <i class="bi bi-cart2" id='cartIcon'></i>
                                Cart
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )
}
