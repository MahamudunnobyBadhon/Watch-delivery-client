import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
import navbarimage from '../../../images/navbarWatch.jpg'

const Header = () => {

    const {user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-4" >
      <div className="container-fluid">
        <div className="d-flex align-items-center hospital-name">
            <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/home">
            
            <i className="fas fa-clock fs-2 p-2"></i>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/home">Home</Link>

              <Link style={{
                  color: 'white'
                }} className="nav-item nav-link" to="/explore">Explore</Link>

              {
                user.email? 
                <Link style={{
                  color: 'white'
                }} className="nav-item nav-link" to="/dashboard">DashBoard</Link> : <p></p> 
              }
              

              {user.email? <p></p> :
                <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/register">Register</Link>}

             { user.email?<p></p> :
              <Link style={{
                  color: 'white'
              }} className="nav-item nav-link" to="/login">Login</Link>}

              

          </ul>

          <span className="nav-link "style={{color: 'yellow'}}>{user?.displayName}</span>
          {user?.email && <button className="btn btn-danger"onClick={logOut}>Log Out</button> }


          
{/* 
          {user?.email ? (user?.photoURL ? <Link to="/profile">
            <img style={{
            height: '60px',
            borderRadius: '40px'
            }} src={user?.photoURL} alt="" />
          </Link> : <Link className="btn btn-danger"to="/profile">Profile</Link>): <p></p>} */}
         
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;