import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import useAuth from "../Hooks/useAuth";
import BottomPart from "../SharedComponents/BottomPart/BottomPart";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const TakeOrder = () => {
  const { id } = useParams();

  const {user} = useAuth();

  const [orderData, setOrderData] = useState({});
  console.log(id);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://stormy-reaches-83687.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  orderData['orderedProductPic'] = product.imageLink;
  orderData['orderedProduct'] = product.productName;
  orderData['displayName'] = user.displayName;
  orderData['email'] = user.email;
  orderData['status'] = "Pending";

  const handleOnChange = e =>{

    const field = e.target.id;

    const value = e.target.value;
    const newOrderData = {...orderData};
    newOrderData[field] = value;
     
    setOrderData(newOrderData)

  }
  const handleOnSubmit = e =>{
      e.preventDefault();
      console.log(orderData);

      axios.post(`https://stormy-reaches-83687.herokuapp.com/orders`, orderData)
        .then(res => {
            if(res.data.insertedId){
                alert('Order Successful');
                
            }
        })
  }
  return (
    <div>
      <Header />
      <h4 className="text-center fw-bold fs-2 mt-3"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Give Order</span></h4>

      <div className="row w-75 mx-auto">
        <div className="col-lg-6 col-md-6 col-12">
          <img
            className="w-100"
            src={product.imageLink}
            alt=""
            style={{
              borderRadius: "1000px",
            }}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-12 text-center d-flex justify-content-center flex-column">
          <h2>{product.productName}</h2>
          <h5
            style={{
              color: "black",
            }}
          >
            {product.description}
          </h5>

          <h3>Price: {product.price}</h3>
        </div>
      </div>

      <h4 className="text-center fw-bold fs-2 mt-3"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Carefully Submit the form</span></h4>

      <form
        className="w-50 mx-auto mt-1 mb-3 register-form"
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
           Quantity
          </label>
          <input
            // onBlur={emailInput}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="quantity"
            aria-describedby="emailHelp"
            required
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
            Address
          </label>
          <input
            // onBlur={passInput}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="address"
            required
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
            Mobile No
          </label>
          <input
            // onBlur={passInput}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="mobileNo"
            required
          />
          <br />
         
        </div>
        
        <button type="submit" className="btn btn-regular btn-primary w-100">
          Submit
        </button>
      </form>

      <Footer></Footer>
      <BottomPart></BottomPart>
    </div>
  );
};

export default TakeOrder;
