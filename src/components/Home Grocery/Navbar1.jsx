import React from 'react';
import './style/Navbar1.css';
import './Media queries/MediaQNavbar1.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import UsFlag from './image/united-states-flag-icon.png';
import JapanFlag from './image/japan-flag-icon.png';
import FrenchFlag from './image/france-flag-icon.png';
import GermanyFlag from './image/germany-flag-icon.png';
import BangladeshFlag from './image/bangladesh-flag-icon.png';
import SouthKoreaFlag from './image/south-korea-flag-icon.png';
// import SignIn from '../SignUp And SignIn/SignIn';

export default function Navbar1() {
    return (
        <div>
            {/* navbar-1 start */}
            <nav id='navbar1' className="navbar">
                {/* main container start */}
                <div id='main1' className="container">
                    {/* menuBox-1 start */}
                    <div id='menuBox1' className="menuBox1">
                        {/* ul-1 start */}
                        <ul id='ul1' className="nav">
                            {/* list 1 */}
                            <li id='list1' className="nav-item">
                                <Link id='link-1' className="nav-link" href="#">
                                    Become A Seller
                                </Link>
                            </li>
                            {/* vr ruler - 1 */}
                            <li id='vrRuler' className='vr'></li>

                            <li id='list1' className="nav-item">
                                <Link id='link-1' className="nav-link" href="#">
                                    About us
                                </Link>
                            </li>
                            {/* vr ruler - 2 */}
                            <li id='vrRuler' className='vr'></li>

                            <li id='list1' className="nav-item">
                                <Link id='link-1' className="nav-link" href="#">
                                    Free Delivery
                                </Link>
                            </li>
                            {/* vr ruler - 3 */}
                            <li id='vrRuler' className='vr'></li>

                            <li id='list1' className="nav-item">
                                <Link id='link-1' className="nav-link" href="#">
                                    Returns Policy
                                </Link>
                            </li>
                        </ul>
                        {/* ul-1 end */}
                    </div>
                    {/* menuBox-1 end */}
                    {/* menuBox-2 start */}
                    <div id='menuBox2' className="menuBox2">
                        {/* ul-1 start */}
                        <ul id='ul2' className="nav">
                            {/* list 2 */}
                            <li id='list2' className="nav-item">
                                {/* menuBox 2 dropdown home */}
                                <div className="dropdown">
                                    {/* link -2 */}
                                    <Link id='link-2' className='nav-link' aria-expanded="false">
                                        Help Center
                                        {/* menu 2 Angle Down Icon */}
                                        <FontAwesomeIcon icon={faAngleDown} id='menu2AngleDownIcon' />
                                    </Link>
                                    {/* Ul Dropdown */}
                                    <ul id='UlDropdown' className="dropdown-menu">
                                        <li id='callCenterLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <FontAwesomeIcon icon={faHeadset} id='nav1Icons' />
                                                Call Center
                                            </Link>
                                        </li>
                                        <li id='liveChatLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <FontAwesomeIcon icon={faCommentDots} id='nav1Icons' />
                                                Live Chat
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* vr ruler - 1 */}
                            <li id='vrRuler' className='vr'></li>
                                
                            <li id='list2' className="nav-item">
                                {/* menuBox 2 dropdown Eng */}
                                <div className="dropdown">
                                    {/* link -2 */}
                                    <Link id='link-2' className='nav-link' aria-expanded="false">
                                        Eng
                                        {/* menu 2 Angle Down Icon */}
                                        <FontAwesomeIcon icon={faAngleDown} id='menu2AngleDownIcon' />
                                    </Link>
                                    {/* Ul Dropdown */}
                                    <ul id='UlDropdown' className="dropdown-menu">
                                        <li id='englishLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={UsFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                English
                                            </Link>
                                        </li>
                                        <li id='japanLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                            <img src={JapanFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                Japan
                                            </Link>
                                        </li>
                                        <li id='frenchLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={FrenchFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                French
                                            </Link>
                                        </li>
                                        <li id='germanyLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={GermanyFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                Germany
                                            </Link>
                                        </li>
                                        <li id='bangladeshLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={BangladeshFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                Bangladesh
                                            </Link>
                                        </li>
                                        <li id='southKoreaLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={SouthKoreaFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                South Korea
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* vr ruler - 2 */}
                            <li id='vrRuler' className='vr'></li>

                            <li id='list2' className="nav-item">
                                {/* menuBox 2 dropdown USD */}
                                <div className="dropdown">
                                    {/* link -2 */}
                                    <Link id='link-2' className='nav-link' aria-expanded="false">
                                        USD
                                        {/* menu 2 Angle Down Icon */}
                                        <FontAwesomeIcon icon={faAngleDown} id='menu2AngleDownIcon' />
                                    </Link>
                                    {/* Ul Dropdown */}
                                    <ul id='UlDropdown' className="dropdown-menu">
                                    <li id='usdLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                            <img src={UsFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                USD
                                            </Link>
                                        </li>
                                        <li id='yenLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={JapanFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                Yen
                                            </Link>
                                        </li>
                                        <li id='franceLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={FrenchFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                Franc
                                            </Link>
                                        </li>
                                        <li id='euroLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={GermanyFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                EURO
                                            </Link>
                                        </li>
                                        <li id='bdtLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={BangladeshFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                BDT
                                            </Link>
                                        </li>
                                        <li id='wonLiDropdown'>
                                            <Link id='LinkDropdown' className="dropdown-item" href="#">
                                                <img src={SouthKoreaFlag} alt="US Flag" id='nav1Icons' className='pe-1 rounded-circle' style={{width:'16px', height:'15px'}} />
                                                WON
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* vr ruler - 3 */}
                            <li id='vrRuler3' className='vr'></li>
                            
                            {/* menuBar 2 list 3 */}
                            <li id='list3' className="nav-item">
                                <Link id='link-3' className="nav-link" to="/login">
                                    <FontAwesomeIcon icon={faCircleUser} id='menu2CircleUserIcon' />
                                    My Account
                                </Link>
                            </li>
                        </ul>
                        {/* ul-1 end */}
                    </div>
                    {/* menuBox-2 end */}
                </div>
                {/* main container end */}
            </nav>
            {/* navbar-2 end */}
        </div>
    )
}
