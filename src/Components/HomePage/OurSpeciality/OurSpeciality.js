import React from "react";
import authentic from '../../../images/authetic.png'
import securePay from '../../../images/securepayment.jpg'
import customerSatisfy from '../../../images/customerSatisfaction.png'

const OurSpecialities = () => {
  return (
    <div>

        <h4 className="text-center fw-bold fs-2">Our <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Specialities</span> </h4>
      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
        <div className="col">
          <div className="card">
            <img style={{
                
                height: '300px'
            }} src={authentic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger fs-3 fw-bol">Authentic</h5>
              <p className="card-text">
               We Provide 100% authetic product.. So be sure to purchase products..
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img style={{
                
                height: '300px'
            }} src={securePay} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title text-danger fs-3 fw-bol">Secure Payment</h5>
              <p className="card-text">
                We have a secure pay system. So don't worry to pay.. Your money is safe..
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img style={{
                
                height: '300px'
            }} src={customerSatisfy} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title text-danger fs-3 fw-bol">Customer Satisfaction</h5>
              <p className="card-text">
                We provide the best customer service, we don't let our customer feel down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialities;
