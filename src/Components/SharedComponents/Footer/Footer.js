import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <div className="row gx-4">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div>
                    
                    
                    <h5> Ghori</h5>
                

                    <p>We have a very good collections of watches. You can buy any brand of watch from us. Fell free to conatct</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <h5>Services</h5>
                <ul>
                    <li>
                        Aunthentic Products
                    </li>
                    <li>
                        On time Order
                    </li>
                    <li>
                        24 hours active
                    </li>
                    <li>
                        Great discount
                    </li>
                    <li>
                        Customer satisfaction
                    </li>
                </ul>

            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <h5>Useful Links</h5>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Explore
                        </li>
                        <li>
                            Dashboard
                        </li>
                        <li>
                            Register
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                
                <h5 style={{
                    
                }}>
                        Contact Us
                </h5>
                <table>
                    <tbody>
                    <tr>
                        <td>
                        <i className="fas fa-phone-volume"></i>
                        </td>
                        <td>
                            017*****97
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="fas fa-map-marker-alt"></i>
                        </td>
                        <td>
                            Ramagar, Dinajpur
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i className="far fa-envelope"></i>
                        </td>
                        <td>
                            u1704035@student.cuet.ac.bd
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>    
    </div>
    );
};

export default Footer;