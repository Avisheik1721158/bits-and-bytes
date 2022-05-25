import React from 'react';

const Extra1 = () => {
    return (
        <div>
            <div className="mt-10 card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album"></img></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra1;