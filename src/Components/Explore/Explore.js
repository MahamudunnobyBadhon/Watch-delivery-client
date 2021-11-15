import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BottomPart from "../SharedComponents/BottomPart/BottomPart";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";
import './Explore.css'

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stormy-reaches-83687.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header />

      <h4 className="text-center fw-bold fs-2 mt-3">All of our<span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Products:</span> </h4>
      <div className="row mx-auto row-cols-1 row-cols-md-2 g-4 home-products">
        {products?.map((product) => (
          <div key={product._id} className="col">
            <div className="card ">
              <img
                src={product.imageLink}
                className="card-img-top"
                style={{
                  height: "400px",
                }}
                alt="..."
              />
              <div className="card-img-overlay">
                <h5
                  className="card-title"
                  style={{
                    color: "#e86d5a",
                    fontSize: "30px",
                  }}
                >
                  {product.productName}
                </h5>
              </div>
              <div className="card-body">
                <h4 className="card-title">{product.productName}</h4>
                <p className="card-text">{product.description}</p>
              </div>
              
            </div>

            <Link
              className="btn btn-primary w-100 text-center order-btn mx-auto mb-2"
              to={`/servicedetails/${product._id}`}
            >
              <i className="fas fa-shopping-basket pe-2"></i>Order Now
            </Link>
            
          </div>
        ))}
      </div>
      <Footer></Footer>
      <BottomPart></BottomPart>

    </div>
  );
};

export default Explore;
