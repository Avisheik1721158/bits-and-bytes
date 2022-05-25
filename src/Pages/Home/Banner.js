import React from 'react';
import computer from '../../image/computer.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={computer} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Hey there!!</h1>
                    <p className="py-6">What can we help you ﬁnd today?</p>
                    <button className="btn btn-success text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;