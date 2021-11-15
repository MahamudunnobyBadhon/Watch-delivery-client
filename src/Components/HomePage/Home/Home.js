import React from 'react';
import BottomPart from '../../SharedComponents/BottomPart/BottomPart';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../../SharedComponents/Header/Header';
import Banner from '../Banner/Banner';
import OurSpecialities from '../OurSpeciality/OurSpeciality';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner/>
            <Products></Products>
            <OurSpecialities/>
            <Reviews/>
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Home;