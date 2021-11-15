import React from 'react';
import './BottomPart.css'

const BottomPart = () => {
    return (
        <div className="bottom-part">
            Copyright ©2021 All rights reserved | This template is made by: <span style={{
                color: '#e2d5ed'
            }}>Md. Mahamudunnoby Badhon</span>
            <br />
            <p>Contact With: 
                <a href="https://www.facebook.com/">
                    <i className= "fab fa-facebook ps-2"></i>
                </a> 
                <a href="https://www.instagram.com/">
                    <i style={{
                        color: '#e87f56'
                    }}className="fab fa-instagram ps-2"></i>
                </a>
                <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin ps-2"></i>
                </a>
                
                </p>
            
        </div>
    );
};

export default BottomPart;