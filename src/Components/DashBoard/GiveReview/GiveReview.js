import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../Hooks/useAuth';

const GiveReview = () => {

    const {user} = useAuth();

  const [Review, setReview] = useState({});

  Review['displayName'] = user.displayName;
  Review['email'] = user.email;
  Review['photoURL'] = user.photoURL;

    const handleOnChange = e =>{

        const field = e.target.id;
    
        const value = e.target.value;
        const newReview = {...Review};
        newReview[field] = value;
         
        setReview(newReview)
    
      }
      const handleOnSubmit = e =>{
          e.preventDefault();
          console.log(Review);
    
          axios.post(`https://stormy-reaches-83687.herokuapp.com/reviews`, Review)
            .then(res => {
                if(res.data.insertedId){
                    alert('Your review has successfully recorded');
                    
                }
            })
      }

    return (
        <div>

<h4 className="text-center fw-bold fs-2"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Give review</span> </h4>
            <form
        className="w-75 mx-auto mt-1 mb-3"
        onSubmit={handleOnSubmit}
      >
        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            User Name
          </label>
          <input
            // onBlur={nameInput}
            onChange={handleOnChange}
            type="name"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            value={user.displayName}
            disabled
          />
        </div>
        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Email address
          </label>
          <input
            // onBlur={emailInput}
            onChange={handleOnChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={user.email}
            disabled
          />
        </div>

        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
           Rating
          </label>
          <input
            // onBlur={emailInput}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="quantity"
            aria-describedby="emailHelp"
            required
            placeholder="Give Rating out of 5"
          />
        </div>

        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Review
          </label>
          <textarea
            // onBlur={passInput}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="review"
            required
            rows="4" 
            cols="50"
          />
        </div>
       
        
        <button type="submit" className="btn btn-regular btn-primary w-100">
          Submit
        </button>
      </form>
        </div>
    );
};

export default GiveReview;