import React from "react";

function Footer() {
     return (
          <>


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
export default Footer;