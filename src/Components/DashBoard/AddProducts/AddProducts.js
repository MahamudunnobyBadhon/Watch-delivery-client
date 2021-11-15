import axios from "axios";
import React from "react";
import {  useState } from "react";

const AddProducts = () => {
  const [productData, setProductData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    const newProductData = { ...productData };
    newProductData[field] = value;
    setProductData(newProductData);
    console.log(newProductData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://stormy-reaches-83687.herokuapp.com/products`, productData)
    .then(res => {
            if(res.data.insertedId){
            alert('Product added successfully');
            document.getElementById('productName').value = "";
            document.getElementById('price').value = "";
            document.getElementById('description').value = "";
            document.getElementById('imageLink').value = "";
        }
    })
  };

  return (
    <div>
     <h4 className="text-center fw-bold fs-2"><span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Add Products</span> </h4>
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
            Product Name
          </label>
          <input
            // onBlur={nameInput}
            onChange={handleOnChange}
            type="name"
            name="name"
            className="form-control"
            id="productName"
            aria-describedby="nameHelp"
            required
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
            Description
          </label>
          <input
            // onBlur={emailInput}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="description"
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
            Price
          </label>
          <input
            // onBlur={passInput}
            onChange={handleOnChange}
            type="number"
            className="form-control"
            id="price"
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
            Image Link
          </label>
          <input
            // onBlur={passInput}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            id="imageLink"
            required
          />
          <br />
        </div>
        <button type="submit" className="btn btn-regular btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
