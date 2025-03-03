import React from 'react';
import './style/Navbar3.css';
import './Media queries/MediaQNavbar3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// Navbar 3 SideBar 1.
import Navbar3SideBar1 from './Navbar3SideBar1';

export default function Navbar3() {
  return (
    <div>
        {/* navbar 3 */}
        <nav id='navbar3' className='navbar'>
            {/* mani container */}
            <div id='mainContainer' className="container">
                {/* sidebar start */}
                    <Navbar3SideBar1/>
                {/* sidebar end */}
                {/* dropdown 1 */}
                <div id='dropdowncontainer' className="dropdown">
                    {/* dropdown link above LG */}
                    <Link id='dropdownlinks' className="dropDownBtn dropdown-item" aria-expanded="false">
                        {/* dropdown icon grid */}
                        <i class="bi bi-grid-3x3-gap" id='gridIcon'></i>
                        All Categories
                        {/* dropdown icon angle down */}
                        <FontAwesomeIcon icon={faAngleDown} id='faangledownIcon' />
                    </Link>
                    {/* dropdown ul */}
                    <ul id='uldropdown' className="dropdown-menu">
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faCarrot}/>
                                Vegetables & Fruit
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* vegetables dropdown UL  */}
                                <ul id='vegetablesDropdownUL' className="dropdown-menu">
                                    <li>
                                        {/* vegetables para */}
                                        <p className='paraText'>
                                            Vegetables & fruits
                                        </p>
                                    </li>
                                    {/* vegetablesDropdownLIST */}
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='vegetablesDropdownLIST'>
                                        <Link id='vegetablesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faWineGlass}/>
                                Beverages
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* Beverages dropdown UL  */}
                                <ul id='beveragesDropdownUL' className="dropdown-menu">
                                    <li>
                                        {/* Beverages para */}
                                        <p className='paraText'>
                                            Beverages
                                        </p>
                                    </li>
                                    {/* BeveragesDropdownLIST */}
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='BeveragesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faDrumstickBite}/>
                                Meats & Seafood
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* Meats $ Seafood dropdown UL  */}
                                <ul id='meatsSeafoodDropdownUL' className="dropdown-menu">
                                    <li>
                                        {/* Meats $ Seafood para */}
                                        <p className='paraText'>
                                            Meats & Seafood
                                        </p>
                                    </li>
                                    {/* Meats $ SeafoodDropdownLIST */}
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='meatsSeafoodDropdownLIST'>
                                        <Link id='meatsSeafoodDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faEgg}/>
                                Breakfast & Dairy
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* Breakfast & Dairy dropdown UL  */}
                                <ul id='breakfastDairyDropdownUL' className="dropdown-menu">
                                    <li>
                                        {/* Breakfast & Dairy para */}
                                        <p className='paraText'>
                                            Breakfast & Dairy
                                        </p>
                                    </li>
                                    {/* Breakfast & Dairy DropdownLIST */}
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='breakfastDairyDropdownLIST'>
                                        <Link id='breakfastDairyDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faIceCream}/>
                                Frozen Foods
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* Frozen Foods dropdown UL  */}
                                <ul id='frozenFoodsDropdownUL' className="dropdown-menu">
                                    <li>
                                        {/* Frozen Foods para */}
                                        <p className='paraText'>
                                            Frozen Foods
                                        </p>
                                    </li>
                                    {/* Frozen Foods DropdownLIST */}
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BeveragesDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='frozenFoodsDropdownLIST'>
                                        <Link id='frozenFoodsDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faCookieBite}/>
                                Biscuits & Snacks
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* Biscuits & Snacks dropdown UL  */}
                                <ul id='BiscuitsSnacksDropdownUL' className="dropdown-menu">
                                    <li>
                                        {/* Biscuits & Snacks para */}
                                        <p className='paraText'>
                                            Biscuits & Snacks
                                        </p>
                                    </li>
                                    {/* Biscuits & Snacks DropdownLIST */}
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='BiscuitsSnacksDropdownLIST'>
                                        <Link id='BiscuitsSnacksDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                                Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li id='listitems-1'>
                            <Link id='link1' className="dropdown-item" href="#">
                                <FontAwesomeIcon className='pe-2' icon={faCartShopping}/>
                                Grocery & Staples
                                <FontAwesomeIcon icon={faAngleRight} id='faAngleRight'/>
                                {/* Grocery & Staples dropdown UL  */}
                                <ul id='groceryStaplesDropdownUL' className="dropdown-menu">
                                <li>
                                        {/* Grocery & Staples */}
                                        <p className='paraText'>
                                            Grocery & Staples
                                        </p>
                                    </li>
                                    {/* Grocery & Staples DropdownLIST */}
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            {/* circle icon */}
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Potato & Tomato
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                    <li id='groceryStaplesDropdownLIST'>
                                        <Link id='groceryStaplesDropdownLink' className="dropdown-item" href="#">
                                            <FontAwesomeIcon icon={faCircle} id='circleIcon'/>
                                            Cucumber & Capsicum
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* itemsContainer */}
                <div className="itemsContainer">
                    {/* items ul */}
                    <ul id='itemsUl' className='nav'>
                        {/* items list */}
                        <li id='itemsList' className='nav-item'>
                            {/* dropdown home */}
                            <div className="dropdown">
                                {/* items link */}
                                <Link id='itemsLink' className='nav-link' aria-expanded="false">
                                    Home
                                    {/* angle down icon */}
                                    <FontAwesomeIcon icon={faAngleDown} id='itemsAngleDownIcon' />
                                </Link>
                                <ul id='itemsUlDropdown' className="dropdown-menu">
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Home Grocery</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Home Electronics</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Home Fashion</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li id='itemsList' className='nav-item'>
                            {/* dropdown home */}
                            <div className="dropdown">
                                {/* items link */}
                                <Link id='itemsLink' className='nav-link' aria-expanded="false">
                                    Shop
                                    {/* angle down icon */}
                                    <FontAwesomeIcon icon={faAngleDown} id='itemsAngleDownIcon' />
                                </Link>
                                <ul id='itemsUlDropdown' className="dropdown-menu">
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Shop</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Shop Details</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Shop Details Two</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li id='itemsList' className='nav-item'>
                            {/* dropdown home */}
                            <div className="dropdown">
                                {/* items link */}
                                <Link id='itemsLink' className='nav-link' aria-expanded="false">
                                    Pages
                                    {/* angle down icon */}
                                    <FontAwesomeIcon icon={faAngleDown} id='itemsAngleDownIcon' />
                                </Link>
                                <ul id='itemsUlDropdown' className="dropdown-menu">
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Cart</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Wishlist</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Checkout</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Become Seller</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Account</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li id='itemsList' className='nav-item'>
                            {/* dropdown home */}
                            <div className="dropdown">
                                {/* items link */}
                                <Link id='itemsLink' className='nav-link' aria-expanded="false">
                                    Vendors
                                    {/* angle down icon */}
                                    <FontAwesomeIcon icon={faAngleDown} id='itemsAngleDownIcon' />
                                </Link>
                                <ul id='itemsUlDropdown' className="dropdown-menu">
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Vendors</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Vendor Details</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Vendors Two</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Vendors Two Details</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li id='itemsList' className='nav-item'>
                            {/* dropdown home */}
                            <div className="dropdown">
                                {/* items link */}
                                <Link id='itemsLink' className='nav-link' aria-expanded="false">
                                    Blog
                                    {/* angle down icon */}
                                    <FontAwesomeIcon icon={faAngleDown} id='itemsAngleDownIcon' />
                                </Link>
                                <ul id='itemsUlDropdown' className="dropdown-menu">
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Blog</Link></li>
                                    <li id='itemsLiDropdown'><Link id='itemsLinkDropdown' className="dropdown-item" href="#">Blog Details</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li id='itemsListContact' className='nav-item'>
                            <Link id='itemsLinkContact' className='nav-link'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* contact button with number */}
                <div className="contactBtnNumber">
                    <Link id='contactBtnLink' className="dropDownBtn dropdown-item" aria-expanded="false">
                        {/* phone volume icon */}
                        <FontAwesomeIcon icon={faPhoneVolume} id='faPhoneVolume'/>
                        01- 234 567 890
                    </Link>
                </div>
                
                {/* wishlist and cart container  navbar-3 */}
                <div className="wishlistAndCartContainerNav-3">
                    {/* search icon container */}
                    <li id='searchIconListNav-3' className='list-unstyled'>
                        <Link id='searchIconLinkNav-3' className='text-decoration-none'>
                            {/* menu bar icon */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} id='searchIconNav-3'/>
                        </Link>
                    </li>
                    {/* wishlist container */}
                    <span className='spanCount1Nav-3'>1</span>
                    <li id='wishlistListNav-3' className='list-unstyled'>
                        <Link id='wishlistLinkNav-3' className='text-decoration-none'>
                            {/* heart icon */}
                            <i class="bi bi-heart" id='wishlistIconNav-3'></i>
                        </Link>
                    </li>
                    {/* cart container */}
                    <span className='spanCount2Nav-3'>2</span>
                    <li id='cartListNav-3' className='list-unstyled'>
                        <Link to={'/YourCart'} id='cartLinkNav-3' className='text-decoration-none'>
                            {/* cart icon */}
                            <i class="bi bi-cart2" id='cartIconNav-3'></i>
                        </Link>
                    </li>
                    {/* menu bar container */}
                    <li id='menuBarListNav-3' className='list-unstyled'>
                        <Link id='menuBarLinkNav-3' className='text-decoration-none'>
                            {/* menu bar icon */}
                            <i class="bi bi-list" id='menuBarIconNav-3' ></i>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    </div>
  )
}
