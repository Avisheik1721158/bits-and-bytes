import React from 'react';

import { useQuery } from 'react-query';

import Loading from '../Shared/Loading';

import ProductRow from './ProductRow';



const ManageProducts = () => {

    // const { transactionId } = pay;
    // const { data: users, isLoading } = useQuery('users', () =>
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/item`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>
                All Orders: {products.length}
            </h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            {/* <th></th>
                            <th>Product name</th>
                            <th> Min Quantity</th>
                            <th>AvailableQuantity</th> */}

                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                index={index}
                                product={product}
                                // pay={pay}
                                refetch={refetch}
                            ></ProductRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;