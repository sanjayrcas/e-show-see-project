import React from 'react';
import './style/Navbar3SideBar1.css';
import './Media queries/MediaQNavbar3SideBar1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import sideBarAllCategoriesLogo from './image/E-SHOP-see1 removebg-preview.png'

export default function Navbar3SideBar1() {
  return (
    <div>
            {/* button for offcanvas open */}
            <button id='sideBarBtnOpen' className="sideBarBtnOpen" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                {/* dropdown icon grid */}
                <i class="bi bi-grid-3x3-gap" id='NavSideBarGridIcon'></i>
                All Categories
                {/* dropdown icon angle down */}
                <FontAwesomeIcon icon={faAngleDown} id='NavSideBarAngleDownIcon' />
            </button>
            <div className="offcanvas offcanvas-start slideBarWidth" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <img src={sideBarAllCategoriesLogo} width={'200px'} height={'60px'} className='px-2' alt="sideBarAllCategoriesLogo" />
                    <button id='sideBarBtnClose' type="button" className="btn-close btn-dark " data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body p-0">
                    {/* Accordion start */}
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <FontAwesomeIcon className='pe-2' icon={faCarrot}/>
                                Vegetables & Fruit
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <FontAwesomeIcon className='pe-2' icon={faWineGlass}/>
                                Beverages
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <FontAwesomeIcon className='pe-2' icon={faDrumstickBite}/>
                                Meats $ Seafood
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <FontAwesomeIcon className='pe-2' icon={faEgg}/>
                                Breakfast & Dairy
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <FontAwesomeIcon className='pe-2' icon={faIceCream}/>
                                Frozen Foods
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                               <FontAwesomeIcon className='pe-2' icon={faCookieBite}/>
                                Biscuits & Snacks
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button slideBarBtn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                               <FontAwesomeIcon className='pe-2' icon={faCartShopping}/>
                                Grocery & Staples
                                {/* <FontAwesomeIcon icon={faAngleRight}/> */}
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion end */}
                </div>
            </div>
        {/* side Bar Main Container 1 end*/}
    </div>
  )
}
