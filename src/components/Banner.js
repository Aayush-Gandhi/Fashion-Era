import React from "react";

function Banner() {
     return (
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
          </div>
     );
}

export default Banner;