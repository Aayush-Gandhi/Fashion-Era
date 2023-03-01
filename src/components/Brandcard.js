import React from "react";

function Brand() {
        return (
                <>
                <div classNameName="container">
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
                </div>

                </>
        );
}

export default Brand;