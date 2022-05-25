import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Extra1 from './Extra1';
import Extra2 from './Extra2';
import Footer from './Footer';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <Reviews></Reviews>
            <Extra1></Extra1>
            <Extra2></Extra2>

        </div>
    );
};

export default Home;