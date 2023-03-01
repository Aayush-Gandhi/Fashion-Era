import React from "react";
import './style.css';

function Nav() {
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


          </>
     );
}



export default Nav;