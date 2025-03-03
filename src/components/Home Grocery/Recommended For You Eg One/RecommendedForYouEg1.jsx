import React, { useState } from "react";
import "./style/RecommendedForYou.css";
import "./media queries/MediaQRecommendedForYou.css";
import RecommendedVegetable1 from "../image/product-img7.png";
import RecommendedVegetable2 from "../image/product-img6.png";
import RecommendedVegetable3 from "../image/product-img5.png";
import RecommendedVegetable4 from "../image/product-img3.png";
import RecommendedVegetable5 from "../image/product-img2.png";
import RecommendedVegetable6 from "../image/product-img8.png";
import RecommendedVegetable7 from "../image/product-img9.png";
import RecommendedVegetable8 from "../image/product-img10.png";
import RecommendedVegetable9 from "../image/product-img17.png";
import RecommendedVegetable10 from "../image/product-img12.png";
import RecommendedVegetable11 from "../image/product-img21.png";
import RecommendedVegetable12 from "../image/product-img24.png";

// git 
// git init


const ProductData = [
    {
        id : 1,
        name: "C-500 Antioxidant Protect Dietary Supplement",
        category: "Grocery",
        image: RecommendedVegetable1,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
        tag: "New",
    },
    {
        id: 2,
        name: "Marcel's Modern Pantry Almond Unsweetened",
        category: "Snacks",
        image: RecommendedVegetable2,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
        tag: "Sale 50%",
    },
    {
        id: 3,
        name: "O Organics Milk, Whole, Vitamin D",
        category: "Organics",
        image: RecommendedVegetable3,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
        tag: "Best Sale",
    },
    {
        id: 4,
        name: "Whole Grains and Seeds Organic Bread",
        category: "Vegetables",
        image: RecommendedVegetable4,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 5,
        name: "Lucerne Yogurt, Lowfat, Strawberry",
        category: "Dairy",
        image: RecommendedVegetable5,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 6,
        name: "Nature Valley Whole Grain Oats and Honey Protein",
        category: "Snacks",
        image: RecommendedVegetable6,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 7,
        name: "C-500 Antioxidant Protect Dietary Supplement",
        category: "Grocery",
        image: RecommendedVegetable7,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 8,
        name: "C-500 Antioxidant Protect Dietary Supplement",
        category: "Grocery",
        image: RecommendedVegetable8,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 9,
        name: "C-500 Antioxidant Protect Dietary Supplement",
        category: "Grocery",
        image: RecommendedVegetable9,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 10,
        name: "Good & Gather Farmed Atlantic Salmon",
        category: "Seafood",
        image: RecommendedVegetable10,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 11,
        name: "Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp",
        category: "Seafood",
        image: RecommendedVegetable11,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
    {
        id: 12,
        name: "Tropicana 100% Juice, Orange, No Pulp",
        category: "Juices",
        image: RecommendedVegetable12,
        price: "$14.99",
        originalPrice: "$28.99",
        rating: 4.8,
        reviews: "17k",
    },
];

export default function RecommendedForYou() {

    const [selectedCategory,setSelectedCategory] = useState('All');

    const filterDatas = 
        selectedCategory === 'All' ? ProductData : ProductData.filter((productData)=>productData.category === selectedCategory );

    return (
        <div className="RecommendedForYouMain my-5">
            <div className="RecommendedForYouMainContainer container-fluid">
                {/* RECOMMENDED FOR YOU */}
                <div className="RecommendedForYouPara d-flex flex-wrap justify-content-between align-items-center">
                    <p className="m-0 fw-bold RecommendForYou">
                        Recommended For You
                    </p>
                    <div className="RecommendedBtnContainer d-flex gap-1 gap-sm-2 gap-md-2 gap-lg-2 gap-xl-2 gap-xxl-2">
                        {["All", "Grocery", "Juices", "Vegetables", "Snacks", "Organic Foods"].map((category)=>(
                            <button key={category} className={`RecommendedBtn px-2 py-1 px-sm-1 py-sm-1 px-md-3 py-md-2 px-lg-3 py-lg-1 px-xl-3 py-xl-2 px-xxl-5 py-xxl-2 ${selectedCategory === category ? 'active' : ''}`}
                                onClick={()=> setSelectedCategory(category)} >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                {/* RECOMMENDED FOR YOU BUYING ITEMS */}
                <div className="row mt-5 RecommendedRow  gap-2 d-flex justify-content-evenly justify-content-sm-evenly justify-content-md-evenly justify-content-lg-evenly justify-conetnt-xl-evenly justify-content-xxl-evenly">
                    {filterDatas.map((ProductData)=>(
                        <div key={ProductData.id} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card RecommendedCardContainerBox mb-3">
                        <div className="RecommendedImgContainerCard card-img text-center my-5">
                            <img src={ProductData.image} alt={ProductData.name} className='RecommendedVegetable1 my-3' />
                            {ProductData.tag &&<button className={`RecommendedNew ${ProductData.tag.replace("","")} fw-bold px-4 py-1`}>{ProductData.tag}</button>}
                        </div>
                        <div className="card-body RecommendedCardData mt-4 p-0">
                            <p className='AntioxidantProtect card-title fw-semibold mb-1'>{ProductData.name}</p>
                            <p className='RecommendedByLuckySupermarket fw-bold mb-2 text-secondary'>
                                <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                By Lucky Supermarket
                            </p>
                            <p className='fw-bold mb-2'>
                                <span className='text-decoration-line-through text-secondary'>{ProductData.originalPrice}</span>
                                {ProductData.price} 
                                <span className='text-secondary '>/Qty</span>
                            </p>
                            <p className='RecommendedRatings fw-bold text-secondary'>
                                {ProductData.rating}
                                    <i class="ms-1 bi bi-star-fill text-warning"></i>
                                    <i class="ms-1 bi bi-star-fill text-warning"></i>
                                    <i class="ms-1 bi bi-star-fill text-warning"></i>
                                    <i class="ms-1 bi bi-star-fill text-warning"></i>
                                    <i class="mx-1 bi bi-star-half text-warning"></i>
                                    ({ProductData.reviews})
                            </p>
                            <div className="RecommendedAddCartBtnContainer">
                                <button className='RecommendedAddCartBtn border-0 rounded-4 fw-bold px-5 py-2'>Add To Cart <i className="bi bi-cart4 ms-2"></i></button>
                            </div>
                        </div>    
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
