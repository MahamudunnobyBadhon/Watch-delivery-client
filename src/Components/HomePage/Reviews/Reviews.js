import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './Review.css'
import Rating from 'react-rating'
const Reviews = () => {


    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch("https://stormy-reaches-83687.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => setReview(data));
      }, []);
    return (
        <div className="mt-5 mb-5">
            <h4 className="text-center fw-bold fs-2">Our <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Happy Client</span> reviews </h4>
            <div className="row w-75 mx-auto">
                {
                    reviews?.map( review => 
                        <div className="col-12 col-md-6 col-lg-4"key={review._id}>
                            <div className="card review-card">
                                <div className="card-body">
                                    <h5 className="card-title">By <span style={{
                                        color: 'red'
                                    }}>{review.displayName}</span></h5>
                                    <p className="card-text">{review.review}</p>

                                    <p></p>
                                    <Rating
                                    initialRating={review.quantity}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star" 
                                    readonly></Rating>
                                
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;