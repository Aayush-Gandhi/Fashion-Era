import React from "react";

function Trending() {
     return (
          <>
          <div className="container">
               <section id="trendings" className="trending-cloth">
                    <div className="row trending-collection">
                         <p className="trending-clothes">Trending Collection</p>
                         <br />
                    </div>

                    <div className="buyers-brands">
                         <p>Check out most promising brands from our buyers</p>
                    </div>


                    <div className="main container row trending-row-card" >
                    {/* style="justify-content: center;" */}
                         <div className="trending-cards col-lg-4 col-md-4 col-sm-2 col-xs-2">

                              <div className="trending-image ">
                                   <img src="Images/kurti.png " alt="" />
                              </div>

                              <div className="raiting">
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star"></span>
                              </div>
                              <div className="title">
                                   <p className="img-title">Kids</p>
                                   <p> <a href="#" className="img-sub-title"> Kurti Full Sleeve </a></p>
                              </div>
                              <div className="pricing">
                                   <h2 className="head-price">$200</h2> <strike className="strike-price">$300</strike>
                              </div>
                         </div>



                         <div className="trending-cards col-lg-4 col-md-4 col-sm-2 col-xs-2">

                              <div className="trending-image">
                                   <img src="Images/saree.png " alt="" />
                              </div>
                              <div className="raiting">
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star"></span>
                              </div>
                              <div className="title">
                                   <p className="img-title">Women</p>
                                   <p className="img-sub-title"> <a href="#"> Silk Saree - Printed </a> </p>
                              </div>
                              <div className="pricing">
                                   <h2 className="head-price">$320</h2> <strike className="strike-price">$410</strike>
                              </div>
                         </div>

                         <div className="trending-cards col-lg-4 col-md-4 col-sm-2 col-xs-2">
                              <div className="trending-image">
                                   <img src="Images/bjacket.png " alt="" />
                              </div>
                              <div className="raiting">
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star"></span>
                              </div>
                              <div className="title">
                                   <p className="img-title">Men</p>
                                   <p className="img-sub-title"> <a href="#"> Multi Purpose Jacket </a> </p>
                              </div>
                              <div className="pricing">
                                   <h2 className="head-price">$510</h2> <strike className="strike-price">$705</strike>
                              </div>
                         </div>


                         <div className="trending-cards col-lg-4 col-md-4 col-sm-2 col-xs-2">
                              <div className="trending-image">
                                   <img src="Images/gjacket.png " alt="" />
                              </div>
                              <div className="raiting">
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star checked"></span>
                                   <span className="fa fa-star"></span>
                              </div>
                              <div className="title">
                                   <p className="img-title">Men</p>
                                   <p className="img-sub-title"> <a href="#"> Jacket </a></p>
                              </div>
                              <div className="pricing">
                                   <h2 className="head-price">$400</h2> <strike className="strike-price">$480</strike>
                              </div>
                         </div>
                         <div className="previous-next">
                              <a href="#" className="previous round">&#8249;</a>
                              <a href="#" className="next round">&#8250;</a>
                         </div>
                    </div>
               </section>
          </div>
          </>
     )
}
export default Trending;