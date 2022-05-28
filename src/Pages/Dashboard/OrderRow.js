import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order }) => {
    const { userName, OrderName, totalPrice } = order;


    return (


        <tr>
            <th>3</th>
            <td>{userName}</td>
            <td>{OrderName}</td>
            <td>{totalPrice}</td>


        </tr>

    );
};

export default OrderRow;