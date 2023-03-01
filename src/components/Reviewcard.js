import React from "react";

function Review() {
     return (
          <>

          <div className="container">
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

          </>
     );
}

export default Review;