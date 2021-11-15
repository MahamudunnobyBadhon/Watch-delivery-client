import React, { useState } from "react";
import {
  
  Link,
  
} from "react-router-dom";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddProducts from "../AddProducts/AddProducts";
import ManageProducts from "../ManageProducts/ManageProduct";
import MyOrder from "../MyOrder/MyOrder";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import "./DashBoardPage.css";

import Footer from "../../SharedComponents/Footer/Footer";
import BottomPart from '../../SharedComponents/BottomPart/BottomPart'
import useAuth from "../../Hooks/useAuth";
import GiveReview from "../GiveReview/GiveReview";
import Payment from "../Payment/Payment";
import navbarimage from '../../../images/navbarWatch.jpg'

import { useEffect } from "react";

const DashBoardPage = () => {

  const {user, logOut, isLoading} = useAuth();

  const[isAdmin, setAdmin] = useState(false);

  useEffect(()=>{
    fetch(`https://stormy-reaches-83687.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
}, [isAdmin]);
 

  const [control, setControl] = useState("");


  if(isLoading){
    return <div className="spinner-border text-danger" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
}


  return (
    <div>
      {/* Header */}
      <nav style={{
              height: '100px'
            }} className="navbar navbar-expand-lg navbar-dark bg-dark fw-4 d-flex justify-content-center" >
      <div className="container-fluid">
        <div className="d-flex align-items-center hospital-name">
            <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/home">
            <img style={{
              width: '100px',
              height: '80px',
              borderRadius: '100px',
              paddingRight: '5px',
              paddingLeft: '5px'
            }} src={navbarimage} alt="" />
            
            Ghori
            </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">

          </ul>
        </div>
      </div>
    </nav>


      {/* Dashboard */}
      <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 col-12 col-lg-3">
                <div className="admin-area p-1">
                  
                  <div className="all-menu mt-5">
                    {/* <li className="admin-menu p-2">
                      <Link to="/appointment">Appoinment</Link>
                    </li> */}
                     <Link
                     style={
                       {
                         textDecoration: 'none',
                         color: 'white'
                       }
                     }
                      to="/home"
                      className="admin-menu p-2"
                    >
                      Home
                    </Link>
                    {
                      isAdmin? 
                      <>
                        <li
                          onClick={() => setControl("addProducts")}
                          className="admin-menu p-2"
                        >
                          Add Products
                        </li>
                        <li
                          onClick={() => setControl("addAdmin")}
                          className="admin-menu p-2"
                        >
                          Add Admin
                        </li>
                        <li
                          onClick={() => setControl("manageProducts")}
                          className="admin-menu p-2"
                        >
                          Manage Products
                        </li>
                        <li
                          onClick={() => setControl("manageOrder")}
                          className="admin-menu p-2"
                        >
                          Manage Order
                        </li>
                      </> : <>
                      <li
                        onClick={() => setControl("myOrder")}
                        className="admin-menu p-2"
                      >
                        My Order
                      </li>
                      <li
                        onClick={() => setControl("payment")}
                        className="admin-menu p-2"
                      >
                        Pay
                      </li>
                      <li
                        onClick={() => setControl("giveReview")}
                        className="admin-menu p-2"
                      >
                        Give Review
                      </li>
                      </>

                    }
                    <li onClick = {logOut}className="admin-menu p-2">
                      Log Out 
                    </li>
                    


                  </div>
                </div>
              </div>
                <div className="col-md-9 col-lg-9 col-12  text-center">
                <h4 className="text-center fw-bold fs-2"><span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Welcome.. {user.displayName} </span> </h4>

                    
                    {control === "addProducts" && <AddProducts></AddProducts>}
                    {control === "addAdmin" && <MakeAdmin></MakeAdmin>}
                    {control === "manageOrder" && <ManageOrders></ManageOrders>}
                    {control === "manageProducts" && <ManageProducts></ManageProducts>}
                    {control === "myOrder" && <MyOrder></MyOrder>}
                    {control === "giveReview" && <GiveReview></GiveReview>}
                    {control === "payment" && <Payment></Payment>}
                  

                  
                </div>
                  
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <BottomPart></BottomPart>
    </div>
  );
};

export default DashBoardPage;
