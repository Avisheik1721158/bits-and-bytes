import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> How will you improve the performance of a React Application?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;