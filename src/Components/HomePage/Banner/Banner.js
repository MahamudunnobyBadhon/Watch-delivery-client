import React from "react";
import banner1 from "../../../images/banner1.jpg"
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import banner4 from '../../../images/banner4.jpg'
import banner5 from '../../../images/banner5.jpg'

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div style={{
                fontStyle: 'italic'
            }}  className="carousel-item active" data-bs-interval="10000">
            <img style={{height: '100vh'}} src={banner5} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mb-3">
              <h1 style={{
                  color: '#aee83a'
              }} >Find your dream watch</h1>
              <h3 style={{
                  color: '#aee83a'
              }}>
                The Leading Marketplace for Luxury Watches Since 2003
              </h3>
              <button style={{
                  fontStyle: 'italic'
                  
              }} className="btn btn-danger p-3 ps-5 pe-5 text-dark fs-3  mt-2 fw-bold">Explore</button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img style={{height: '100vh'}} src={banner3} className="d-block w-100" alt="..." />
            <div style={{
                fontStyle: 'italic'
            }}  className="carousel-caption d-none d-md-block mb-3">
            <h1 style={{
                  color: '#aee83a'
              }} >Find your dream watch</h1>
              <h3 style={{
                  color: '#aee83a'
              }}>
                Upto <span style={{
                    color: '#1fcbed'
                }}>30%</span> Bonouses!!!
              </h3>
              <button style={{
                  fontStyle: 'italic'
                  
              }} className="btn btn-danger p-3 ps-5 pe-5 text-dark fs-3 mt-2 fw-bold">Explore</button>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{height: '100vh'}} src={banner4} className="d-block w-100" alt="..." />
            <div style={{
                fontStyle: 'italic'
            }} className="carousel-caption d-none d-md-block mb-3">
            <h1 style={{
                  color: '#aee83a'
              }} >Find your dream watch</h1>
              <h3 style={{
                  color: '#aee83a'
              }}>
                <span style={{
                    color: '#1fcbed'
                }}>Authentic</span> Products Only
              </h3>
              <button style={{
                  fontStyle: 'italic'
                  
              }} className="btn btn-danger p-3 ps-5 pe-5 text-dark fs-3  mt-2 fw-bold">Explore</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
