import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L34ZdFjTqOrjldUw78wLgtUdj0opRe43WuVjzIz4npvjzqqZdjFsIvmfMNs2u1f25mPcZuRJsTSsauwqYR6w70z00aprokkyP');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    const { data, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>


            <div class="card w-50 max-w-md  bg-base-100 shadow-xl my-12 ">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {data.userName}</p>
                    <h2 class="card-title">Pay for: {data.OrderName}</h2>
                    <p>Total price is: <span className='text-orange-700'>${data.totalPrice}</span>
                    </p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;