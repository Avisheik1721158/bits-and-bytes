import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading';
import ManageAllOrders from './ManageAllOrders';
import OrderRow from './OrderRow';



const PaymentStatus = () => {


    // const { data: users, isLoading } = useQuery('users', () =>
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const { data: payment, isLoading, refetch } = useQuery('payment', () => fetch(`http://localhost:5000/payment`, {
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
                All Orders: {payment.length}
            </h2>

            <div class="overflow-x-auto">
                <table class="table w-full">


                    <tbody>

                        {
                            payment.map((pay) => <ManageAllOrders
                                key={pay._id}

                                pay={pay}
                                refetch={refetch}
                            ></ManageAllOrders>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentStatus;