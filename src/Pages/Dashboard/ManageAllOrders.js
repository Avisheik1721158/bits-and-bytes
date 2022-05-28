import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';


const ManageAllOrders = () => {
    const [user] = useAuthState(auth)
    // const { data: users, isLoading } = useQuery('users', () =>
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    // .then(result => console.log(result))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>
                All Orders: {orders.length}
            </h2>

            <div class="overflow-x-auto">
                {/* <table class="table w-full">

                    <thead>
                        <tr>

                            <th></th>
                            <th>User Name</th>
                            <th>Order Product</th>
                            <th>Total Price</th>
                            <th>Paid status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                refetch={refetch}
                            ></OrderRow>)
                        }


                    </tbody>
                </table> */}
            </div>
        </div>
    );
};

export default ManageAllOrders;