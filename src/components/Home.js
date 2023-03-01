import React from "react";

function Home() {
     return (

          <>


               <header className="container">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                         <div className="container-fluid nav-title">
                              <a1 className="logo fashion" href="#">Fashion <span className="text-warning">Era</span> </a1>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                   data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                   aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                   <ul className="navbar-nav me-auto me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                             <a className="nav-link" aria-current="page" href="#">Men</a>
                                        </li>

                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Women</a>
                                        </li>

                                        <li className="nav-item">
                                             <a className="nav-link">Kids</a>
                                        </li>

                                        <li className="nav-item">
                                             <a className="nav-link winter-notification" href="#">
                                                  <img src="Images/new-pop.png" alt="" className="pop-img" />
                                                  Winter</a>
                                        </li>

                                        <li className="nav-item" href="#">
                                             <a className="nav-link">Lifestyle</a>
                                        </li>
                                   </ul>

                                   <form className="d-flex" role="search" id="search">
                                        <input className="form-control search-nav" type="search" aria-label="Search" placeholder="search" />

                                        <button className="cart">
                                             <img src="Images/3.png" alt="" className="pop-img-arrow" />
                                             <i className="fa fa-cart-arrow-down"></i>
                                        </button>
                                        <button className="heart">
                                             <img src="Images/8.png" alt="" className="pop-img-heart" />
                                             <i className="fa fa-heart-o"></i>
                                        </button>
                                        <button className="user">
                                             <i className="fa fa-user-o"></i>
                                        </button>

                                   </form>
                              </div>
                         </div>
                    </nav>
               </header>




               <div className="container">
                    <section id="intro" className="ems-center">
                         <div className="container info">
                              <p className="head-info">TRENDING COLLECTION</p>
                              <p className="explore">Explore Summer</p>
                              <p className="explore"> Collection</p>
                              <button type="button" className="btn btn-success">Shop Now</button>
                         </div>
                         <div className="intro-img">
                              <img src="Images/Himg.png" id="Himg" />
                         </div>
                    </section>

                    <section id="about" className="about-section-padding">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-30">
                                        <img src="Images/image 8.png" alt="" className="img-fluid about-img" />
                                   </div>
                              </div>
                         </div>
                    </section>



                    <section id="offer" className="offer-section-padding">
                         <div className="container-offer">

                              <div className="ad">
                                   <img src="Images/Girls.png" alt="" id="offer-img-girls" />
                                   <button type="button" className="btn btn-success-girls">Shop Now</button>

                                   <img src="Images/Men.png" alt="" id="offer-img-mens" />
                                   <button type="button" className="btn btn-success-mens">Shop Now</button>
                              </div>
                              <div className="baby">
                                   <img src="Images/Baby.png" alt="" id="offer-img-baby" />
                                   <button type="button" className="btn btn-success-baby">Shop Now</button>
                              </div>
                         </div>
                    </section>




                    <div className="row new-arrival">
                         <p className="arrival">New Arrivals</p>
                         <br />
                    </div>
                    <div>
                         <p className="brands">Check out most promising brands from our buyers</p>
                    </div>
                    <div className="row arrival-button">
                         <button type="button" className="btn btn-success-all">All</button>
                         <button type="button" className="btn btn-success-btnmen">Mens</button>
                         <button type="button" className="btn btn-success-btnwomen">Women</button>
                         <button type="button" className="btn btn-success-btnkids">Kids</button>
                    </div>


                    <section id="cards-trend" className="trending-card container">
                         <div className="main trending-cards-1 row">
                              <div className="cards col-lg-4 col-md-4 col-sm-2 col-xs-2">

                                   <div className="image">
                                        <img src="Images/yellow.png " alt="" />
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
                                        <p> <a href="#" className="img-sub-title"> Yellow T-Shirt </a> </p>
                                   </div>
                                   <div className="pricing">
                                        <h2 className="head-price">$180</h2> <strike className="strike-price">$300</strike>
                                   </div>
                              </div>


                              <div className="cards col-lg-4 col-md-4 col-sm-2 col-xs-2">
                                   <div className="image">
                                        <img src="Images/image1.png " alt="" />
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
                                        <p> <a href="#" className="img-sub-title"> Ethnic Kurti </a> </p>
                                   </div>
                                   <div className="pricing">
                                        <h2 className="head-price">$220</h2> <strike className="strike-price">$250</strike>
                                   </div>
                              </div>

                              <div className="cards col-lg-4 col-md-4 col-sm-2 col-xs-2">
                                   <div className="image">
                                        <img src="Images/image4.png " alt="" />
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
                                        <p> <a href="#" className="img-sub-title"> Kurtis, Tunics & Tops </a></p>
                                   </div>
                                   <div className="pricing">
                                        <h2 className="head-price">$280</h2> <strike className="strike-price">$350</strike>
                                   </div>
                              </div>

                              <div className="cards col-lg-4 col-md-4 col-sm-2 col-xs-2">
                                   <div className="image ">
                                        <img src="Images/image3.png " alt="" />
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
                                        <p> <a href="#" className="img-sub-title"> Round Neck T-Shirt </a> </p>
                                   </div>
                                   <div className="pricing">
                                        <h2 className="head-price">$220</h2> <strike className="strike-price">$250</strike>
                                   </div>
                              </div>

                              <div className="previous-next">
                                   <a href="#" className="previous round">&#8249;</a>
                                   <a href="#" className="next round">&#8250;</a>
                              </div>
                         </div>
                    </section>


                    <section id="Deals" className="top-brand-deals">
                         <div className="brand-card">

                              <div className="card-body">
                                   <h1 className="card-text">Top Brands Deal</h1>
                                   <h6 className="card-text-2">Up To <span className="text-warning">40%</span> off on brands </h6>
                              </div>

                              <div className="btn-brand">
                                   <button type="button" className="btn-brand-symbol mt-2"> <img src="Images/Nike.png" alt=""
                                        className="btn-img" /></button>
                                   <button type="button" className="btn-brand-symbol mt-2"> <img src="Images/HnM.png" alt=""
                                        className="btn-img" /></button>
                                   <button type="button" className="btn-brand-symbol mt-2"> <img src="Images/Levis.png" alt=""
                                        className="btn-img" /> </button>
                                   <button type="button" className="btn-brand-symbol mt-2 mb-2"> <img src="Images/Puma.png" alt=""
                                        className="btn-img" /></button>
                              </div>
                         </div>
                    </section>


                    <section id="trendings" className="trending-cloth">
                         <div className="row trending-collection">
                              <p className="trending-clothes">Trending Collection</p>
                              <br />
                         </div>

                         <div className="buyers-brands">
                              <p>Check out most promising brands from our buyers</p>
                         </div>


                         <div className="main container row trending-row-card">
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


                    <section id="review" className="about-review">
                         <div className="reviews">
                              <p className="review-line">Reviews</p>
                         </div>
                         <div className="customer-review">
                              <p className="customer-line">This is what our customers has to say</p>
                         </div>
                         <div className="review-card">
                              <img src="Images/Reviewcard.png" alt="" className="review-img" />
                              <p className="review-card-review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod animi ea modi ipsa accusantium? Voluptas neque soluta rerum ad, ratione distinctio ducimus laborum dolore in officia odio eius iure!
                              </p>
                              <a href="#" className="card-previous round">&#8249;</a>
                              <a href="#" className="card-next round">&#8250;</a>
                         </div>

                    </section>
               </div>

               <footer className="container">
                    <section id="newsletter-footer" className="footer-padding">
                         <div className="news-letter">
                              <img src="Images/newsletter.png" alt="" className="news-img" />
                         </div>
                         <div className="subscribe-news">
                              <p className="news-title">Subscribe Newsletter</p>
                         </div>
                         <div className="subscribe-email">
                              <p className="news-title">Subscribe to our email and get updates right in your inbox</p>
                         </div>
                         <div className="input-group">
                              <div className="form-floating search-news">
                                   <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" />

                                   <label>Enter Your Email
                                   </label>

                                   <button type="submit" className="mail-img-btn">
                                        <img src="Images/mail.png" alt="" />
                                   </button>
                              </div>
                         </div>

                         <div className="social-btn">
                              <button type="button" className="btn-social-btn">
                                   <img src="Images/facebook.svg" alt="" className="social-img mb-1" />
                              </button>
                              <button type="button" className="btn-social-btn">
                                   <img src="Images/instagram.svg" alt="" className="social-img mb-1" />
                              </button>
                              <button type="button" className="btn-social-btn">
                                   <img src="Images/twitter.svg" alt="" className="social-img mb-1" />
                              </button>
                         </div>




                         <div className="row footer-row">
                              <div className="col-lg-3 mb-3 about-footer-head">

                                   <h2 className="fashion">Fashion <span className="text-warning footer-title">Era</span></h2>
                                   <br />
                                   <ul className="list-unstyled small">
                                        <li className="mb-2 about-footer ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                             consequatur doloribus hic qui officia, ab in illo vero ipsam amet et aliquam assumenda ad
                                             dolorum voluptas reiciendis unde possimus! Ab? </li>
                                   </ul>
                              </div>
                              <div className=" col-lg-2 offset-lg-1">
                                   <p className="footer-title">Help</p>
                                   <ul className="list-unstyled">
                                        <li className="mb-2 mt-2"><a href="#" className="footer-sub-title">Privacy Policy</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Shipping & Delivery</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Refund Policy</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Track Your Order</a></li>
                                   </ul>
                              </div>
                              <div className="col-6 col-lg-2">
                                   <p className="footer-title">Store</p>
                                   <ul className="list-unstyled">
                                        <li className="mb-2 mt-2"><a href="#" className="footer-sub-title">Men Fashion</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Women Fashion</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Kids Fashion</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Others</a></li>
                                   </ul>
                              </div>
                              <div className="col-lg-3">
                                   <p className="footer-title">Support</p>
                                   <ul className="list-unstyled">
                                        <li className="mb-2 mt-2"><a href="#" className="footer-sub-title">Feedback</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Contact Us</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Download App</a></li>
                                        <li className="mb-2"><a href="#" className="footer-sub-title">Terms & Condition</a></li>
                                   </ul>
                              </div>
                         </div>

                    </section>
               </footer>

          </>



     );
}


export default Home;