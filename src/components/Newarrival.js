import React from "react";

function Arrival(){
     return(
          <>
          
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

          
          </>
     );
}

export default Arrival;