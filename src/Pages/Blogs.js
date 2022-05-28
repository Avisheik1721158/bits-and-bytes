import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"> How will you improve the performance of a React Application?</h2>
                    <p>Create seperate component for each task. When we need fetch and get data we can use state function seperatetly. Removing the unnecessary re-renders. Using react library to reduce the code. Keeping shotcut method to reduce the systemk. Using Loading for the unexpectable things.</p>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>There are few many way to state in a react appliation. There are server state where we store data.Local state where we can run our system, global state and URL state. </p>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Why you do not set the state directly in React</h2>
                    <p>It is not possible to set the state directly. If I call the setState firsttly. It doesnot change.</p>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <h2>arr[3 ] = name price des    arr.[0]</h2>

                </div>
            </div>
            <div class="card w-96 bg-red-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?

                    </h2>
                    <p>Unit testing prefers the codr to refactor code at a lasting date, and make sure the module still works correctly</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;