import React, { useEffect, useState } from "react";
import "./style/RecommendedForYou.css";
import "./Media queries/MediaQRecommendedForYou.css";
// import RecommendedVegetable1 from "./image/product-img7.png";
// import RecommendedVegetable2 from "./image/product-img6.png";
// import RecommendedVegetable3 from "./image/product-img5.png";
// import RecommendedVegetable4 from "./image/product-img3.png";
// import RecommendedVegetable5 from "./image/product-img2.png";
// import RecommendedVegetable6 from "./image/product-img8.png";
// import RecommendedVegetable7 from "./image/product-img9.png";
// import RecommendedVegetable8 from "./image/product-img10.png";
// import RecommendedVegetable9 from "./image/product-img17.png";
// import RecommendedVegetable10 from "./image/product-img12.png";
// import RecommendedVegetable11 from "./image/product-img21.png";
// import RecommendedVegetable12 from "./image/product-img24.png";

export default function RecommendedForYou() {
    const [view, setView] = useState([]);

    useEffect(() => {
      fetch("/Product.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setView(data);
        });
    }, []);

    console.log(view);

    return (
      <div className="RecommendedForYouMain my-5">
        <div className="RecommendedForYouMainContainer container-fluid">
          {/* RECOMMENDED FOR YOU */}
          <div className="RecommendedForYouPara d-flex justify-content-between align-items-center">
            <p className="h6 m-0 fw-bold RecommendForYou">
              Recommended For You
          </p>
            <div className="RecommendedBtnContainer d-flex gap-1">
              <button className="RecommendedBtn RecommendedBtn-1">All</button>
              <button className="RecommendedBtn RecommendedBtn-2">Grocery</button>
              <button className="RecommendedBtn RecommendedBtn-3">Fruits</button>
              <button className="RecommendedBtn RecommendedBtn-4">Juices</button>
              <button className="RecommendedBtn RecommendedBtn-5">
                Vegetables
              </button>
              <button className="RecommendedBtn RecommendedBtn-6">Snacks</button>
              <button className="RecommendedBtn RecommendedBtn-7">
                Organic Foods
              </button>
            </div>
          </div>
          {/* RECOMMENDED FOR YOU BUYING ITEMS */}
          <div className="row mt-5 RecommendedRow  gap-2 d-flex justify-content-lg-evenly">
            {view.map((item, index) => {
              if(item.category === "Dairy"){
                  return (
                      <div key={index} className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card RecommendedCardContainerBox mb-3">
                        <div className="RecommendedImgContainerCard card-img text-center my-5">
                          <img
                            src={item.image}
                            alt="RecommendedVegetable1"
                            className="RecommendedVegetable1 my-3"
                          />
                          <button className="RecommendedNew fw-bold px-4 py-1">
                            {item.label}
                          </button>
                        </div>
                        <div className="card-body RecommendedCardData mt-4 p-0">
                          <p className="AntioxidantProtect card-title fw-semibold mb-1">
                            {item.name}
                          </p>
                          <p className="RecommendedByLuckySupermarket fw-bold mb-2 text-secondary">
                            <i class="bi bi-shop-window bg-success text-white me-2"></i>
                            By Lucky Supermarket
                          </p>
                          <p className="fw-bold mb-2">
                            <span className="text-decoration-line-through text-secondary">
                              {item.price.original}
                            </span>
                            $ {item.price.discounted} <span className="text-secondary ">/Qty</span>
                          </p>
                          <p className="RecommendedRatings fw-bold text-secondary">
                            {item.rating.average}
                            <i class="ms-1 bi bi-star-fill text-warning"></i>
                            <i class="ms-1 bi bi-star-fill text-warning"></i>
                            <i class="ms-1 bi bi-star-fill text-warning"></i>
                            <i class="ms-1 bi bi-star-fill text-warning"></i>
                            <i class="mx-1 bi bi-star-half text-warning"></i>
                            (17k)
                          </p>
                          <div className="RecommendedAddCartBtnContainer">
                            <button className="RecommendedAddCartBtn border-0 rounded-4 fw-bold px-5 py-2">
                              Add To Cart <i className="bi bi-cart4 ms-2"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
              }
              
              
            })}

                  {/* <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card RecommendedCardContainerBox mb-3">
                          <div className="RecommendedImgContainerCard card-img text-center my-5">
                              <img src={RecommendedVegetable1} alt="RecommendedVegetable1" className='RecommendedVegetable1 my-3' />
                              <button className='RecommendedNew fw-bold px-4 py-1'>New</button>
                          </div>
                          <div className="card-body RecommendedCardData mt-4 p-0">
                              <p className='AntioxidantProtect card-title fw-semibold mb-1'>C-500 Antioxidant Protect Dietary Supplement</p>
                              <p className='RecommendedByLuckySupermarket fw-bold mb-2 text-secondary'>
                                  <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                  By Lucky Supermarket
                              </p>
                              <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                              <p className='RecommendedRatings fw-bold text-secondary'>
                                  4.8 
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="mx-1 bi bi-star-half text-warning"></i>
                                  (17k)
                              </p>
                              <div className="RecommendedAddCartBtnContainer">
                                  <button className='RecommendedAddCartBtn border-0 rounded-4 fw-bold px-5 py-2'>Add To Cart <i className="bi bi-cart4 ms-2"></i></button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card RecommendedCardContainerBox mb-3">
                          <div className="RecommendedImgContainerCard card-img text-center my-5">
                              <img src={RecommendedVegetable2} alt="RecommendedVegetable1" className='RecommendedVegetable1 my-3' />
                              <button className='RecommendedSaleOff fw-bold px-2 py-1'>Sale 50%</button>
                          </div>
                          <div className="card-body RecommendedCardData mt-4 p-0">
                              <p className='AntioxidantProtect card-title fw-semibold mb-1'>Marcel's Modern Pantry Almond Unsweetened</p>
                              <p className='RecommendedByLuckySupermarket fw-bold mb-2 text-secondary'>
                                  <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                  By Lucky Supermarket
                              </p>
                              <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                              <p className='RecommendedRatings fw-bold text-secondary'>
                                  4.8 
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="mx-1 bi bi-star-half text-warning"></i>
                                  (17k)
                              </p>
                              <div className="RecommendedAddCartBtnContainer">
                                  <button className='RecommendedAddCartBtn border-0 rounded-4 fw-bold px-5 py-2'>Add To Cart <i className="bi bi-cart4 ms-2"></i></button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card RecommendedCardContainerBox mb-3">
                          <div className="RecommendedImgContainerCard card-img text-center my-5">
                              <img src={RecommendedVegetable3} alt="RecommendedVegetable1" className='RecommendedVegetable1 my-3' />
                              <button className='RecommendedBestSale fw-bold px-2 py-1'>Best Sale</button>
                          </div>
                          <div className="card-body RecommendedCardData mt-4 p-0">
                              <p className='AntioxidantProtect card-title fw-semibold mb-1'>O Organics Milk, Whole, Vitamin D</p>
                              <p className='RecommendedByLuckySupermarket fw-bold mb-2 text-secondary'>
                                  <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                  By Lucky Supermarket
                              </p>
                              <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                              <p className='RecommendedRatings fw-bold text-secondary'>
                                  4.8 
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="mx-1 bi bi-star-half text-warning"></i>
                                  (17k)
                              </p>
                              <div className="RecommendedAddCartBtnContainer">
                                  <button className='RecommendedAddCartBtn border-0 rounded-4 fw-bold px-5 py-2'>Add To Cart <i className="bi bi-cart4 ms-2"></i></button>
                              </div>
                          </div>
                      </div>
                      <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-2 card RecommendedCardContainerBox mb-3">
                          <div className="RecommendedImgContainerCard card-img text-center my-5">
                              <img src={RecommendedVegetable4} alt="RecommendedVegetable1" className='RecommendedVegetable1 my-3' />
                          </div>
                          <div className="card-body RecommendedCardData mt-4 p-0">
                              <p className='AntioxidantProtect card-title fw-semibold mb-1'>Whole Grains and Seeds Oranginc Bread</p>
                              <p className='RecommendedByLuckySupermarket fw-bold mb-2 text-secondary'>
                                  <i class="bi bi-shop-window bg-success text-white me-2"></i>
                                  By Lucky Supermarket
                              </p>
                              <p className='fw-bold mb-2'><span className='text-decoration-line-through text-secondary'>$28.99</span>$14.99 <span className='text-secondary '>/Qty</span></p>
                              <p className='RecommendedRatings fw-bold text-secondary'>
                                  4.8 
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="ms-1 bi bi-star-fill text-warning"></i>
                                  <i class="mx-1 bi bi-star-half text-warning"></i>
                                  (17k)
                              </p>
                              <div className="RecommendedAddCartBtnContainer">
                                  <button className='RecommendedAddCartBtn border-0 rounded-4 fw-bold px-5 py-2'>Add To Cart <i className="bi bi-cart4 ms-2"></i></button>
                              </div>
                          </div>
                      </div> */}
          </div>
        </div>
      </div>
    );
}
