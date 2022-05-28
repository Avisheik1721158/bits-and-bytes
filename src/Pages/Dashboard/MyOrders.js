import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Payment from './Payment';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [item, setItem] = useState({});
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://desolate-garden-75654.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2>
                My order: {orders.length}
            </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order name</th>
                            <th> Total Price</th>
                            <th> Payment Status(Pay) </th>
                            <th> Payment Status(Paid) </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.OrderName}</td>
                                    <td>{order.totalPrice}</td>
                                    <td> {
                                        !order.paid && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    </td>
                                    <td> {
                                        order.paid && <Link to={``}> <span className='text-success font-bold'>Paid</span></Link>}
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;